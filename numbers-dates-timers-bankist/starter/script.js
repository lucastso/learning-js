'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-06-17T18:49:59.371Z',
    '2021-06-18T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-17T18:49:59.371Z',
    '2020-06-17T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const day = `${date.getDate()}`.padStart(2, 0); // 2 char long, pad with 0
  // const month = `${date.getMonth() + 1}`.padStart(2, 0); // 2 char long, pad with 0
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  console.log(acc.movements);
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the ramaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // remove 1 sec
    time--;
  };
  // set time to 5 minutes
  let time = 300;
  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Experimenting API

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0); // 2 char long, pad with 0
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // 2 char long, pad with 0
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  // reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////// LECTURES

////////////////////////////// LECTURE: SETTIMEOUT AND SETINTERVAL

// setTimeout
const ingredients = ['olives', 'cheese'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}!`),
  3000,
  ...ingredients
);
console.log('waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);
  console.log(`${hour}:${min}:${sec}`);
}, 5000);

/*
////////////////////////////// LECTURE: INTERNATIONALIZING NUMBERS

const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'USD',
  // useGrouping: false, number without the separators
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('Japan:', new Intl.NumberFormat('ja-JP', options).format(num));
console.log(
  'Browser:',
    new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

/*
////////////////////////////// LECTURE: OPERATIONS WITH DATES

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

/*
////////////////////////////// LECTURE: CREATING DATES

const now = new Date();
console.log(now);

// console.log(new Date('Jun 17 2001 18:20:35'));
// console.log(new Date('December 24, 2020'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33)); // corrects to dec 03

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day
console.log(future.getDay()); // weekday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142267780000)); // based on miliseconds, generate the future date

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

/*
////////////////////////////// LECTURE: WORKING WITH BIGINT

console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // unsafe numbers

console.log(123123123123123123123123123123123123123123123123123n);
console.log(BigInt(123123123123123123123123123123123123123123123123123));

// operations
console.log(10000n + 10000n);
console.log(10000n * 10000n);
console.log(10000n - 1000n);
const huge = 123123109834123847189237419823748917234n;
const num = 23;
// console.log(huge * num);

// exceptions
console.log(huge * BigInt(num));
console.log(20n > 15);
console.log(typeof 20n);
console.log(20 == 20n);

console.log(huge + ' is really big');

// divisions
console.log(10n / 3n);
*/

/*
////////////////////////////// LECTURE: REMAINDER OPERATOR

console.log(5 % 2);
console.log(8 % 3);
console.log(6 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(113)); 

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) row.style.backgroundColor = 'grey';
    if (i % 3 === 0) row.style.backgroundColor = 'darkgrey';
  });
});
*/

/*
////////////////////////////// LECTURE: CONVERTING AND CHECKING NUMBERS

console.log(23 === 23.0);

// base 10 - 0 to 9... 1/10 = 0.1... 3/10 = 3.3333
// binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// convert strings to nums
// console.log(Number('23'));
console.log(+'23');

// parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('3.5rem', 10));
console.log(parseFloat('4.5rem', 10)); // dont need 'number', but nowadays its used

// check is value is NaN
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // false

// checking if value is number
console.log(Number.isFinite(+'20'));
console.log(Number.isInteger(23));
*/

/*
////////////////////////////// LECTURE: MATH AND ROUNDING

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); // doesnt parse

console.log(Math.min(5, 18, '23', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 12) + 1); // random num 0 to 12

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0... 1 -> 0...(max - min) -> min... max
console.log(randomInt(10, 20));

// rouding integers - all of them do type coertion
console.log(Math.trunc(23.3)); // removes decimal part
console.log(Math.round(23.8));
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.8));
console.log(Math.floor(23.3));
console.log(Math.floor(23.8));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3)); // works the other way around

// rounding decimals
console.log((2.7).toFixed(0));
console.log((2.734).toFixed(2));
console.log(+(2.734).toFixed(3));
*/
