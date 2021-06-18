"use strict";
///// ACTIVATING STRICT MODE /////
/*
"use strict"; // evita erros, avisa

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("eu posso dirigir");

// const interface = "audio"; não deixa colocar o nome das variáveis como algo que pode ser implementado futuramente no js
// const private = 543;
*/

///// FUNCTIONS /////

/*
function logger() {
  console.log("meu nome é lucas");
}

// calling / running / invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
----------
EXERCICIOS
----------

function descbribeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const countryOne = descbribeCountry("BRAZIL", 250000000, "brasilia,");
const countryTwo = descbribeCountry("USA", 328000000, "washington,");
const countryThree = descbribeCountry("JAPAN", 126000000, "tóquio.");
console.log(countryOne, countryTwo, countryThree);
*/

///// FUNCTION DECLARATION VS EXPRESSIONS /////
/*
// function declaration
const age1 = calcAge1(2001);

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1, age2);
*/
/*
----------
EXERCICIOS
----------

function percentageOfWorld1 (population) {
  return (population / 7900) * 100;
}

const countryOne = percentageOfWorld1(1441);
const countryTwo = percentageOfWorld1(250);
const countryThree = percentageOfWorld1(332);
console.log(countryOne, countryTwo, countryThree);

const percentageOfWorld2 = function(population) {
  return (population / 7900) * 100;
}

const countryFour = percentageOfWorld2(1441);
const countryFive = percentageOfWorld2(250);
const countrySix = percentageOfWorld2(332);
console.log(countryFour, countryFive, countrySix);
*/

///// ARROW FUNCTIONS /////
/*
// arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2001, "lucas"));
console.log(yearsUntilRetirement(2003, "rafaela"));
*/
/*
----------
EXERCICIOS
----------

const percentageOfWorld2 = population => (population / 7900) * 100;

const countryFour = percentageOfWorld2(1441);
const countryFive = percentageOfWorld2(250);
const countrySix = percentageOfWorld2(332);
console.log(countryFour, countryFive, countrySix);
*/

///// FUNCTIONS CALLING OTHER FUNCTIONS /////
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
----------
EXERCICIOS
----------

const percentageOfWorld2 = population => (population / 7900) * 100;

function describePopulation(country, population) {
  const percentagePopulation = percentageOfWorld2(population);
  const aboutCountry = `${country} has ${population} million people, which is about ${percentagePopulation} of the world.`;
  return aboutCountry;
}

console.log(describePopulation("china", 1441, 1441));
console.log(describePopulation("brasil", 250, 250));
console.log(describePopulation("usa", 332, 332));
*/

///// REVIEWING FUNCTIONS /////
/*
const calcAge = function(birthYear){
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years:`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired:`);
    return -1;
  }
}

console.log(yearsUntilRetirement(2001, "lucas"));
console.log(yearsUntilRetirement(1800, "rafa"));
*/

/*
-------------------- CODING CHALLENGE #1 --------------------

const calcAverage = (a, b, c) => (a + b + c) / 3;

// test data 1 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dolphins ganharam (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas ganharam (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("ninguém ganhou");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(10, 111); // pode colocar o valor aqui;

// test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///// ARRAYS /////
/*
const friend1 = "lucas";
const friend2 = "rafa";
const friend3 = "gu";

const friends = ["lucas", "rafa", "gu"]; // array
console.log(friends);

const y = new Array(2001, 2003, 2001, 2021); // não usar

console.log(friends[0]);
console.log(friends[2]);
console.log(y[0]);

console.log(friends.length);
console.log(y.length);
console.log(friends[friends.length - 2]); // 3 - 2 = "rafa"

friends[2] = "digo";
console.log(friends);
// friends = ["amaral", "mateus"]; // não pode ser assim

const firstName = "lucas";
const lucas = [firstName, "tassi", y[3] - y[2], "coder", friends];
console.log(lucas);
console.log(lucas.length);

// exercise
const calcAge = function(birthYear){
  return 2021 - birthYear;
}

const years = [1990, 2001, 2003, 2021, 1998];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 2])];
console.log(ages);
*/
/*
----------
EXERCICIO
----------

const percentageOfWorld2 = population => (population / 7900) * 100;

const populations = [1441, 250, 342, 180];
console.log(populations.length === 4);

const percentages = [percentageOfWorld2(populations[0]), percentageOfWorld2(populations[1]), percentageOfWorld2(populations[2]), percentageOfWorld2(populations[3])];
console.log(percentages);
*/

///// BASIC ARRAY OPERATIONS (METHODS) /////
/*
const friends = ["lucas", "rafa", "gu"];

// add elementos
const newLength = friends.push("code");
console.log(friends);
console.log(newLength);

friends.unshift("youtube");
console.log(friends);

// remover elementos
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);
//

console.log(friends.indexOf("rafa"));
console.log(friends.indexOf("code"));

friends.push(23);
console.log(friends.includes("lucas"));
console.log(friends.includes("code"));
console.log(friends.includes(23));

if (friends.includes("lucas")) {
  console.log("você tem um amigo chamado lucas");
}
*/
/*
----------
EXERCICIOS
----------

const neighbours = ["canada", "mexico", "greenland"];

neighbours.push("utopia");
console.log(neighbours);
neighbours.pop("utopia");
console.log(neighbours);

if (neighbours.includes("germany")) {
  console.log("it's not on my team!");
}

console.log(neighbours.indexOf("mexico"));
neighbours[1] = "hawaii";
console.log(neighbours);
*/
/*
-------------------- CODING CHALLENGE #2 --------------------

const calcTip = function(bill) {
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // arrowed

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`the bills was ${bills}`);
console.log(`the tips was ${tips}`);
console.log(`the total was ${total}`);
*/

///// INTRODUCTION TO OBJECTS /////
/*
const lucasArray = [
  "lucas",
  "tassi",
  2021 - 2001,
  "coder"
  ["ale", "amaral", "mateus"]
];

// objects literal syntax
const lucas = {
  firstName: "lucas",
  lastName: "tassi",
  age: 2021 - 2001,
  job: "coder",
  friends: ["ale", "amaral", "mateus"]
};

console.log(lucas);
*/
/*
----------
EXERCICIOS
----------

const myCountry = {
  country: "brasil",
  capital: "brasilia",
  language: "portuguese",
  population: 250,
  neighbours: ["colombia", "peru", "bolivia"]
}

console.log(myCountry);
*/

///// DOT VS. BRACKET NOTATION /////
/*
const lucas = {
  firstName: "lucas",
  lastName: "tassi",
  age: 2021 - 2001,
  job: "coder",
  friends: ["ale", "amaral", "mateus"]
};
console.log(lucas.firstName);
console.log(lucas["age"]);

const nameKey = "Name"; //crio uma variável que contém um valor repetido, no caso "name", daí eu posso colocar ela em uma variável e depois usar
console.log(lucas["first" + nameKey], lucas["last" + nameKey]);

// console.log(lucas."last" + nameKey);

const interestedIn = prompt("o que você quer saber sobre o lucas? escolha entre firstName, lastName, age, job and friends");

if (lucas[interestedIn]) {
  console.log(lucas[interestedIn]);
} else {
  console.log("this value don't exist! escolha entre firstName, lastName, age, job and friends");
}

lucas.location = "brazil";
lucas["github"] = "@lucastso";
console.log(lucas);

console.log(`${lucas.firstName} tem ${lucas.friends.length} amigos e o seu melhor amigo é o ${lucas.friends[0]}`);
*/
/*
----------
EXERCICIOS
----------

const myCountry = {
  country: "brasil",
  capital: "brasilia",
  language: "portuguese",
  population: 250,
  neighbours: ["colombia", "peru", "bolivia"]
}

console.log(`o ${myCountry.country} tem ${myCountry.population} milhões de pessoas, ${myCountry.neighbours.length} vizinhos e a sua capital é chamada ${myCountry.capital}`);

console.log(`o ${myCountry.country} tem ${myCountry.population + 2} milhões de pessoas, ${myCountry.neighbours.length} vizinhos e a sua capital é chamada ${myCountry.capital}`);

console.log(`o ${myCountry.country} tem ${myCountry["population"] - 2} milhões de pessoas, ${myCountry.neighbours.length} vizinhos e a sua capital é chamada ${myCountry.capital}`);
*/

///// OBJECTS METHODS /////
/*
const lucas = {
  firstName: "lucas",
  lastName: "tassi",
  birthYear: 2001,
  job: "coder",
  friends: ["ale", "amaral", "mateus"],
  hasDriversLicense: true,
  
  // calcAge: function(birthYear) {
  //   return 2021 - birthYear;
  // }

  // calcAge: function() {
  //   // console.log(this);
  //   return 2021 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${lucas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  }
};
console.log(lucas.calcAge());
console.log(lucas.age);
console.log(lucas.age);
console.log(lucas.age);

// challenge
// "lucas is a 46-year old teacher, and he has a driver's license"
console.log(lucas.getSummary());
*/
/*
-------------------- CODING CHALLENGE #3 --------------------

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName}'s BMI ${john.bmi}`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s BMI ${mark.bmi})`)
}
*/

///// ITERATION: THE FOR LOOP /////
/*
// console.log("repetição 1");
// console.log("repetição 2");
// console.log("repetição 3");
// console.log("repetição 4");
// console.log("repetição 5");
// console.log("repetição 6");
// console.log("repetição 7");
// console.log("repetição 8");
// console.log("repetição 9");
// console.log("repetição 10");

// for loop keeps runing while condition is true
for(let rep = 1; rep <= 20; rep++) {
  console.log(`repetição ${rep}`);
}
*/
/*
----------
EXERCICIOS
----------

for(let vote = 1; vote <= 50; vote++) {
  console.log(`voter number ${vote} is voting`);
}
*/

///// LOOPING ARRAYS, BREAKING AND CONTINUING /////
/*
const lucasArray = [
  "lucas",
  "tassi",
  2021 - 2001,
  "coder",
  ["ale", "amaral", "mateus"],
  true
];
const types = [];
// console.log(lucasArray[0]);
// console.log(lucasArray[1]);
// ...
// console.log(lucasArray[4]);
// lucas[5] não existe, pois o array ia do 0 ao 4

for(let i = 0; i < lucasArray.length; i++) {
  // reading from lucas array
  console.log(lucasArray[i], typeof lucasArray[i]);

  // filling types array
  // types[i] = typeof lucasArray[i];
  types.push(typeof lucasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statements
console.log("--- only strings ---");
for(let i = 0; i < lucasArray.length; i++) {
  if(typeof lucasArray[i] !== "string") continue;
  console.log(lucasArray[i], typeof lucasArray[i]);
}

console.log("--- break with number ---");
for(let i = 0; i < lucasArray.length; i++) {
  if(typeof lucasArray[i] === "number") break;
  console.log(lucasArray[i], typeof lucasArray[i]);
}
*/
/*
----------
EXERCICIOS
----------

function percentageOfWorld1 (population) {
  return (population / 7900) * 100;
}
const populations = [1441, 250, 342, 180];
const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);
*/

///// LOOPING BACKWARDS AND LOOPS IN LOOPS /////
/*
const lucasArray = [
  "lucas",
  "tassi",
  2021 - 2001,
  "coder",
  ["ale", "amaral", "mateus"]
];

for(let i = lucasArray.length-1; i >= 0; i--) {
  console.log(i, lucasArray[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- starting the exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}: rep ${rep}`);
  }
}
*/
/*
----------
EXERCICIOS
----------

const listOfNeighbours = [
  ["canada", "mexico"],
  ["spain"],
  ["norway", "sweden", "russia"]
]

for(let i = 0; i < listOfNeighbours.length; i++) {
  for(let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`neighbour: ${listOfNeighbours[i][y]}`);
  }
}
*/

///// WHILE LOOP /////
/*
// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`for: repetição ${rep}`);
// }

// let rep = 1;
// while(rep <= 10) {
//   console.log(`while: repetição ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log("loop ends");
}
*/
/*
-------------------- CODING CHALLENGE #4 --------------------

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++ ) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
*/
