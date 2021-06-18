'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/*
////////////////////////////// LECTURE: WHICH ARRAY METHOD TO USE?

I want...

to mutate the original array:
- add to original: .push (end), .unshift(start)
- remove from original: .pop (end), .shift(start), .splice(any)
- others: .reverse, .sort, .fill

a new array:
- computed from original: .map (loop)
- filtered using condition: .filter
- portion of original: .slice
- adding original to other: .concat
- flattering the original: .flat, .flatMap (add a map in the end)

an array index:
- based o value: .indexOf
- based on condition: .findIndex

an array element:
- based on condition: .find

know if array includes:
- based on value: .includes
- based on condition: .some, .every 

a new string:
- based on separator string: .join

to transform to value:
- based on accumulator: .reduce

to just loop an array:
- based on callback: .forEach

*/
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////// LECTURE: SORTING
// sorts based on strings, covert everyth to srings and sort

// strings
const owners = ['lucas', 'rafa', 'gu', 'digo'];
console.log(owners.sort()); // sort from a to z, but mutates

// numbers
console.log(movements);

// if return < 0 - a, b (keep order)
// if return > 0 - b, a (switch order)

// ascending
// movements.sort((a, b) => {
//   // mutating
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a); // simplified
console.log(movements);

/*
////////////////////////////// LECTURE: FLAT AND FLATMAP METHODS

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // pass levels on flat, 1 raso and it goes on deeper, 2, 3...

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); // same results, but cant go levels deeper into arrays
*/

/*
////////////////////////////// LECTURE: SOME AND EVERY

console.log(movements.includes(-130)); // test for equality

// some
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0); // test for condition
console.log(anyDeposits);

// every
console.log(account4.movements.every(mov => mov > 0)); // all acc4 movements are deposits so true

// separete callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
////////////////////////////// LECTURE: MORE WAYS OF CREATING AND FILLING ARRAYS

// fill - fill a empty arr with the value
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(5); // empty
console.log(x);
x.fill(1, 3);
console.log(x);
arr.fill(23, 1, 3);
console.log(arr);

// array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i++);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('EUR', ''))
  );
  console.log(movementsUI);

  movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/

////////////////////////////// LECTURE: THE FINDINDEX METHOD

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

////////////////////////////// LECTURE: IMPLEMENTING TRANSFERS

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
});

////////////////////////////// REQUEST LOAN

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

////////////////////////////// LECTURE: CREATING DOM ELEMENTS

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // innerHTML is the same as textContent = 0;, but it clear the html and not just the text

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// console.log(containerMovements.innerHTML);

////////////////////////////// LECTURE: IMPLEMENTING LOGIN

let currentAccount;

const updateUI = function (acc) {
  // display and calculate de balance, summary and movements
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc.movements);
};

btnLogin.addEventListener('click', function (e) {
  // prevent form from submiting and refreshing the page
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    labelWelcome.style.color = 'black';
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = 'Invalid ID or Password!';
    labelWelcome.style.color = 'red';
  }
});

////////////////////////////// SORT

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

////////////////////////////// DISPLAY BALANCE

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

////////////////////////////// DISPLAY SUMMARY

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${outcomes} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

////////////////////////////// LECTURE: COMPUTING USERNAMES

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

/*
////////////////////////////// LECTURE: THE MAGIC OF CHAINING METHODS

const eurToUsd = 1.1;
console.log(movements);

// pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd) // before
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

/*
////////////////////////////// LECTURE: MAP, FILTER AND REDUCE: DATA TRANSFORMATION

// map = can be used to loop over arrays, it creates a brand new array based on the initial array. loops over an array and for each iteration, applys a callback func, putting the results in a new array... more useful than forEach
// filter = filter the array and only the elements that have a specific condition will be filtered to a new array
// reduce = boils all array elements down to one single value, like a snowball = acc + current [3, 1] === 4
*/

/*
////////////////////////////// LECTURE: THE MAP METHOD

const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDesc);
*/

/*
////////////////////////////// LECTURE: THE FILTER METHOD

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*
////////////////////////////// LECTURE: THE REDUCE METHOD

console.log(movements);

// accumulator is like a snowball
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// with forEach
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance);

// maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/*
////////////////////////////// LECTURE: THE FIND METHOD

// find something and return what u searched

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/*
////////////////////////////// LECTURE: SIMPLE ARRAY METHODS

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // mutates the original array
console.log(arr);

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutates the original array
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //same results

// join
console.log(letters.join('-'));
*/

/*
////////////////////////////// LECTURE: LOOPING ARRAYS: forEach

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} you withdraw ${Math.abs(movement)}`);
  }
}

console.log('-----FOREACH-----'); // cannot continue or break
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} you withdraw ${Math.abs(mov)}`);
  }
});
// foreach does this basically
// 0: function(200)
// 1: function(450)
*/

/*
////////////////////////////// LECTURE: forEach WITH MAPS AND SETS

// with maps
const currencies = new Map([
  ['USD', 'United States dollar'], // key, value
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// with sets
const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur']); // sets only have the unique values, no reps
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

////////////////////////////// LECTURE: ARRAY METHODS PRACTICING

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; // cleaner
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));

/*
////////////////////////////// CODING CHALLENGE: #1 //////////////////////////////

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`dog number ${i + 1} is an adult and its ${dog} years old`);
    } else {
      console.log(`dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////////////////////////// CODING CHALLENGE: #2 //////////////////////////////

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humanAges.filter(dog => dog > 18);
  console.log(humanAges);
  console.log(adultDogs);
  // const averageDogAge =
  //   adultDogs.reduce((acc, dog) => acc + dog, 0) / excludedDogs.length;
  console.log(adultDogs);
  const averageDogAge = adultDogs.reduce(
    (acc, dog, i, arr) => acc + dog / arr.length,
    0
  );
  return averageDogAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/

/*
////////////////////////////// CODING CHALLENGE: #3 //////////////////////////////

const calcAverageHumanAge2 = ages => {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(dog => dog > 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
};
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
*/

/*
////////////////////////////// LECTURE: WHICH ARRAY METHOD TO USE?

I want...

to mutate the original array:
- add to original: .push (end), .unshift(start)
- remove from original: .pop (end), .shift(start), .splice(any)
- others: .reverse, .sort, .fill

a new array:
- computed from original: .map (loop)
- filtered using condition: .filter
- portion of original: .slice
- adding original to other: .concat
- flattering the original: .flat, .flatMap (add a map in the end)

an array index:
- based o value: .indexOf
- based on condition: .findIndex

find an array element:
- based on condition: .find

know if array includes:
- based on value: .includes
- based on condition: .some, .every 

a new string:
- based on separator string: .join

to transform to value:
- based on accumulator: .reduce

to just loop an array:
- based on callback: .forEach

*/

/*
////////////////////////////// CODING CHALLENGE: #3 //////////////////////////////

Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/

// 1.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOk = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOk));

// 7.
console.log(dogs.filter(checkEatingOk));

// 8.
// sort it by recommended food portion in an ascending order.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
