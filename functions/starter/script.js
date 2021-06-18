'use strict';

/*
////////////////////////////// DEFAULT PARAMETERS
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 199 * numPassengers // ES6 way
) {
  // numPassengers = numPassengers || 1; --- ES5 way of setting default values
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', undefined, 200);
*/

/*
////////////////////////////// HOW PASSING ARGUMENTS WORKS: Values vs Reference
const flight = 'LH123';
const lucas = {
  name: 'lucas tassi',
  passport: 12345678,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH345';
  passenger.name = 'mr.' + passenger.name;
  if (passenger.passport === 12345678) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, lucas);
// console.log(flight);
// console.log(lucas);

// is the same as doing...
// const flightNum = flight;
// const passenger = lucas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 10000000);
};

newPassport(lucas);
checkIn(flight, lucas);
*/

/*
////////////////////////////// FIRST CLASS VS HIGHER ORDER FUNCTIONS
-- FIRST CLASS FUNCS = first class citizens, functions are simply values... functions are just another type of object in js

example: 
const add =  <- (a, b) => a + b; ->

-- HIGHER ORDER FUNCS = is a function that receives another funstion as an argument, that returns a new function, or both... this is only possible because of first class funcs. am example is the .addEventListener func, that receives another function when click or whatever

example:
btnClose. <- addEventListener -> ('click', randomThing)
*/

////////////////////////////// FUNCS THAT ACCEPT CALLBACK FUNCS
/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// high order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`tranformed string: ${fn(str)}`);
  console.log(`tranformed by: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);

// js uses callback funcs all the time
const high5 = () => {
  console.log('👍');
};

document.body.addEventListener('click', high5);
*/
/*
////////////////////////////// FUNCS RETURNING FUNCS
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHi = greet('hi');
greeterHi('lucas');
greeterHi('rafa');

greet('hello')('lucas');
*/
/*
////////////////////////////// THE CALL, APPLY AND BIND METHODS

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [], // bookings fica vazio pois será adicionado posteriormente
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(123, 'lucas');
lufthansa.book(456, 'rafa');
// console.log(lufthansa);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//// CALL METHOD
// book(2323, 'gu'); // DOES NOT WORK
book.call(eurowings, 2323, 'gu'); // set where the "this" gonna point, to what func
console.log(eurowings);

book.call(lufthansa, 239, 'digo');
console.log(lufthansa);

const swiss = {
  airline: 'swiss airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 523, 'cadu');
book.call(swiss, 233, 'tom');

//// APPLY METHOD
const flightData = [523, 'pai'];

book.apply(swiss, flightData); // this ones are the same, they just dont use apply in modern js, we can use the spread operator instead
book.call(swiss, ...flightData);
console.log(swiss);

////////////////////////////// THE BIND METHOD
const bookEW = book.bind(eurowings);
const bookSW = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(123, 'lucas tassi');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('lucas');
bookEW23('rafa');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application - can preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23; the same

console.log(addVAT(100));
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/
/*
////////////////////////////// IIFE - IMEMDIATELY INVOKED FUNCTION EXPRESSIONS
const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})(); // <- calling it immediately

// console.log(isPrivate);

(() => console.log('this will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
console.log(notPrivate);
*/
/*
////////////////////////////// CLOSURES
// gives a function access to all the variables of its parent function, even after that parent function has returned. the func keeps a reference to its outer scope, which preserves the scope chain throughout time. it makes sure that a func doesnt loose connection to variables that existed at the func birth place, LIKE A BACKPACK.
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// example 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f(); // closure contains a
console.dir(f);
h();
f(); // closure contains b
console.dir(f);

// example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;
boardPassengers(180, 3);
*/
////////////////////////////// CODING CHALLENGE #1 //////////////////////////////
/*
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0), // This generates [0, 0, 0, 0]. More in the next section 😃
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/
/*
////////////////////////////// CODING CHALLENGE #2 //////////////////////////////

(function () {
  const header = document.querySelector('h1');
  const bodyer = document.querySelector('body');
  header.style.color = 'red';
  const changeColor = function () {
    header.style.color = 'blue';
  };
  bodyer.addEventListener('click', changeColor);
})();

// bom, o que esse addEventListener faz? bom, você percebeu que eu passei dois parametros nessa função, certo? um foi o 'click', que toda vez que ele ouvir o evento de 'clicar', ele faz executar esse segundo parametro, que também é uma função... essa 'changeColor', foi feita para mudar a cor do h1 para azul, e isso é feito quando você clica no body... essa 'changeColor', ela é uma callback function. você pode ver que eu coloquei a função inteira em parenteses, é para ele funcionar com o IIFE, se não colocar, não funciona, e você também deve na hora que escrever ela, já chamar ela imediatamente, colocando os parenteses de abertura e fechadura ali, no final.
*/
