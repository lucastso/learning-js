'use strict';

/*
---------- SCOPING ----------

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new var with same name as outer scope's var
      const firstName = 'Rafa';

      // reassigning outer scope's var
      output = 'new output!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // } else {
    //   millenial = false;
    //   console.log(`Oh, and you're not a millenial, ${firstName}`);
    // }
    console.log(millenial);
    // add(4, 4);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Lucas';
calcAge(1991);

*/
/*
---------- HOISTING AND TDZ ----------

// vars
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Lucas';
let job = 'developer';
const year = 2001;

// funcs
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
var addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/
/*
---------- THIS KEYWORD ----------

console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  // console.log(this);
};
calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  // console.log(this);
};
calcAgeArrow(2003);

const lucas = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};
lucas.calcAge();

const rafa = {
  year: 2003,
};

rafa.calcAge = lucas.calcAge;
rafa.calcAge();

const f = lucas.calcAge;
// f();
*/
/*
---------- REGULAR VS ARROW FUNCTIONS ----------

const lucas = {
  firstName: 'Lucas',
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    // solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey, ${this.firstName}`);
  },
};
lucas.greet();
lucas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 3, 1);

var addArrow = (a, b) => {
  // cant use arguments in arrow funcs
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 3, 1);
*/
/*
---------- PRIMITIVES VS OBJECTS ----------

let age = 30;
let oldAge = age;
age = 31;
oldAge = age;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'lucas',
  age: 20,
};

const friend = me;
friend.age = 25;

console.log('me: ', me); // age shows 25, but should be 20
console.log('friend: ', friend);
*/
/*
---------- PRIMITIVES VS OBJECTS IN PRACTICE ----------

// primitive types
let lastName = 'tassi';
let oldLastName = lastName;
lastName = 'tomaseto';
console.log(lastName, oldLastName);

// reference types
const rafa = {
  fistName: 'rafa',
  lastName: 'tomaseto',
  age: 18,
};

const marriedRafa = rafa;
marriedRafa.lastName = 'tassi';

console.log('before marriage: ', rafa);
console.log('after marriage: ', marriedRafa);

// marriedRafa = {} doesnt work

// copying objects
const rafa2 = {
  fistName: 'rafa',
  lastName: 'tomaseto',
  age: 18,
  family: ['bruno', 'lucas'],
};

const rafaCopy = Object.assign({}, rafa2);
rafaCopy.lastName = 'tassi';

rafaCopy.family.push('gu');
rafaCopy.family.push('tom');

console.log('before marriage: ', rafa2);
console.log('after marriage: ', rafaCopy);
*/
