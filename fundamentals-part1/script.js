/////  VALUES AND VARIABLES /////

/*
let js = "amazing";
console.log(40+8+23-10);

console.log("lucas");
console.log(19);

let firstName = "rafa";
console.log(firstName);

let lucas_rafa = "lr";
let _function = 27; // se for fazer uma variável que tem nomes que usam no js, usar _ ou $ para declarar
let Person = "lucas"; // não começar a variável com letra maiuscula, pq é designada para orientação para objetos
let PI = 3.1415; // letras maiusculas tbm são designadas para variáveis que sabemos que não irão mudar

let myFirstJob = "adm";
let myCurrentJob = "coder"; // colocar o nome da variável bem descritivo e direto

console.log(myFirstJob);

 ----------
  EXERCICIO
 ----------

let country = "brazil";
let continent = "south america";
let population = "brazilian";

console.log(country, continent, population);
*/

/////  OBJECTS AND PRIMITIVES /////
//  todo valor é um objeto ou um primitivo //

/*
true;
let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 19);
console.log(typeof "lucas");

jsIsFun = "yes!"; // dynamic typing = posso mudar o valor de uma variável mais tarde, só que sem colocar o "let" antes
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

console.log(typeof null);
*/
/*
 ----------
  EXERCICIO
 ----------

let isIsland = "brazil";
isIsland = true;
let language;

console.log(typeof isIsland, language);
*/

/////  LET, CONST AND VAR /////
//  const não mudam em ponto algum //

/*
let age = 19;
age = 20;

const birthYear = 2001;

var job = "coder";
job = "teacher";

lastName = "tassi";
console.log(lastName);
*/
/*
 ----------
 EXERCICIO
 ----------

const language = "portuguese";
language = "english";
*/

/////  BASIC OPERATORS /////

// operadores de matemática
/*
const now = 2021;
const ageLucas = now - 2001;
const ageRafa = now - 2003;
console.log(ageLucas, ageRafa);

console.log(ageLucas * 2, ageLucas / 10, 2 ** 3); // 2 ** 3 quer dizer 2 elevado a 3

const firstName = "lucas";
const lastName = "tassi";
console.log(firstName + " " + lastName);

let x = 10+5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // o oposto de x++, ele abaixa o valor por 1
x--;
console.log(x);

// operadores de comparação
console.log(ageLucas > ageRafa); // >, <, >=, <=
console.log(ageRafa >= 18);

const isFullAge = ageRafa >= 18;

console.log(now - 2001 > now - 2003);
*/
/*
 ----------
 EXERCICIO
 ----------

let xp = 250000000;
console.log(xp / 4);
xp++;
console.log(xp);
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
*/

/////  OPERATOR PROCEDENCE /////

/*
const now = 2021;
const ageLucas = now - 2001;
const ageRafa = now - 2003;

console.log(now - 2001 > now - 2003);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const avarageAge = (ageLucas + ageRafa) / 2;
console.log(ageLucas, ageRafa, avarageAge);
*/

/*
-------------------- CODING CHALLENGE #1 --------------------

  -MEU JEITO-

let markMass, markHeight, johnMass, johnHeight, bmiMark, bmiJohn;
markMass = 78;
markHeight = 1.69;
johnMass = 95;
johnHeight = 1.88;

bmiMark = markMass / markHeight ** 2;
console.log(bmiMark);
bmiJohn = johnMass / johnHeight ** 2;
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

  -JONAS-

const  massMark = 78;
const  heightMark = 1.69;  // TRUE
const  massJohn = 92;
const  heightJohn = 1.95;

const  massMark = 95;
const  heightMark = 1.88;  // FALSE
const  massJohn = 85;
const  heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

*/

///// STRINGS AND TEMPLATE LITERALS /////

/*
const firstName = "lucas";
const job = "coder";
const birthYear = 2001;
const year = 2021;

const lucas = "eu sou " + firstName + ", tenho " + (year - birthYear) + " anos e sou um " + job;
console.log(lucas); // normal

const lucasNew = `eu sou ${firstName}, tenho ${year - birthYear} anos e sou um ${job}`;
console.log(lucasNew); // template literals

console.log(`just a regular string...`);

console.log(`string with
multiple
lines`);
*/
/*
----------
EXERCICIO
----------

console.log(`Portugal is in Europe, and its 11 million people speak portuguese`);
*/

///// TAKING DECISIONS: IF/ELSE STATEMENTS /////

/*
const age = 15;

if(age >= 18 //condição//) {
  console.log("rafa can start driving license 😎");
} else {
  const yearsLeft = 18 - age;
  console.log(`rafa is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
----------
EXERCICIO
----------

const population = 250000000;
let country;
if (population > 33000000) {
  console.log("portugal's population is below yours");
} else {
  console.log("portugal's population is above yours");
}
*/
/*
-------------------- CODING CHALLENGE #2 --------------------

const  massMark = 78;
const  heightMark = 1.69;  // TRUE
const  massJohn = 92;
const  heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`mark has a higher bmi, that is ${BMIMark}`);
} else {
  console.log(`john has a higher bmi, that is ${BMIJohn}`);
}
*/

///// TYPE CONVERSION AND COERCION /////

/*
// type conversion
const inputYear = "2001";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("lucas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("i'm " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // "11"
n = n - 1; // 10
console.log(n);
*/
/*
----------
EXERCICIO
----------

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

///// TRUTHY AND FALSY VALUES, for booleans /////
// 5 falsy values: 0, "", undefined, null, NaN. os outros são truthy
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("lucas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("não gaste tudo");
} else {
  console.log("você precisa de um trabalho");
}

let height; // o resultado foi UNDEFINED pois não atribuímos valor ao height
if (height) {
  console.log("heiight is defined");
} else {
  console.log("height is undefined");
}
*/

///// EQUALITY OPERATOR == (loose equality operator) vs === (strict comparison operator) /////

/*
const age = "18";
if (age === 18) console.log("você é um adulto agora (strict)"); // SEMPRE USAR

if (age == 18) console.log("você é um adulto agora (loose)");

const favourite = Number(prompt("qual o seu número favorito?"));
console.log(favourite);

if (favourite === 8) { // 8 == 8, coloquei o "Number" atrás do prompt
  console.log("cool");
}  else if (favourite === 7){
  console.log("cool too");
} else {
  console.log("nem 8 nem 7");
}

if (favourite !== 8) console.log("pq n 8?");
*/

///// LOGICAL OPERATORS /////

/*
const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

// if (hasDriverLicence && hasGoodVision) {
//   console.log("ela pode dirigir");
// } else {
//   console.log("alguém deve dirigir");
// }

const isTired = false;
console.log(hasDriverLicence && hasGoodVision && isTired);

if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log("ela pode dirigir");
} else {
  console.log("alguém deve dirigir");
}
*/
/*
----------
EXERCICIOS
----------

const languageEnglish = true;
const isLand = false;
const populationFifty = true;

if (languageEnglish && !isLand && populationFifty) {
  console.log("é aqui que vc deve morar");
} else {
  console.log("não é aqui que vc deve morar");
}
*/
/*
-------------------- CODING CHALLENGE #3 --------------------

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//   console.log("dolphins ganharam");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("koalas ganharam");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("os dois ganharam");
// }

// BONUS

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphins ganharam");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas ganharam");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("os dois ganharam");
} else {
  console.log("ninguém ganhou");
}
*/

///// SWITCH STATEMENTS /////

/*
const day = "saturday";

switch(day) {
  case "monday":
    console.log("planejar estrutura do curso");
    console.log("ir para reunião de códigos");
    break;
  case "tuesday":
    console.log("preparar videos teóricos");
    break;
  case "wednesday":
  case "thursday":
    console.log("apenas codar");
    break;
  case "friday":
    console.log("ler livros");
    break;
  case "saturday":
  case "sunday":
    console.log("ficar de boas");
    break;
  default:
    console.log("não é um dia valido");
}

if (day === "monday") {
  console.log("planejar estrutura do curso");
  console.log("ir para reunião de códigos");
} else if (day === "tuesday") {
  console.log("preparar videos teóricos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("apenas codar");
} else if (day === "friday") {
  console.log("ler livros");
} else if (day === "saturday" || day === "sunday") {
  console.log("ficar de boas");
} else {
  console.log("não é um dia válido");
}
*/
/*
----------
EXERCICIOS
----------

const language = "english";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3th place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

///// STATEMENTS AND EXPRESSIONS /////
/*
3 + 4
2001
true && false && !false

if (23>10) {
  const str = "23 is bigger";
}

const me = "lucas"
console.log(`i'm ${2037 - 2012} years old ${me}`);
*/

///// THE CONDITIONAL (TERNARY) OPERATOR /////
/*
const age = 19;
// age >= 18 ? console.log("eu gosto de vinho") : console.log("eu gosto de água");

const drink = age >= 18 ? "vinho" : "água";
console.log(drink);

let drink2;
if (age >= 18){
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`eu gosto de beber ${age >= 18 ? "vinho" : "água"}`);
*/
/*
----------
EXERCICIOS
----------

const population = 130;
population >= 33000000 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");
*/

/*
-------------------- CODING CHALLENGE #4 --------------------

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
*/
