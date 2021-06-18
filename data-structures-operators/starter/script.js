'use strict';

// Data needed for first part of the section

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // es6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = [1],
    mainIndex = [0],
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is ur pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};
/*
////////////////////////////////////////// STRING METHODS IN PRACTICE
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/
/*
////////////////////////////////////////// WORKING WITH STRINGS 3
console.log('a+very+nice+string'.split('+'));
console.log('lucas tassi'.split(' '));

const [firstName, lastName] = 'lucas tassi'.split(' ');
console.log(firstName);

const newName = ['mr.', firstName, lastName.toUpperCase()].join(' '); // são juntos pelo ' '
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('rafaela tomaseto proença');
capitalizeName('lucas tassi');

// add padding to a string
const message = 'go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('lucas'.padStart(25, '+'));

// real world example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4336373984));
console.log(maskCreditCard('43363887439879776'));

// repeat
const message2 = 'atention... radiation levels are high, risk of death... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'🛫🛬'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);
*/
/*
////////////////////////////////////////// WORKING WITH STRINGS 2
const airline = 'GOL Airlines';
// const plane = 'AC130';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'lUcAs'; // lucas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing user input emails

const email = 'hello@lucas.io';
const loginEmail = '   Hello@Lucas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceBR = '288,97R$';
const priceUS = priceBR.replace('R', 'U').replace(',', '.');
console.log(priceUS);

const announcement =
  'all passengers come to boarding door 23. boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate')); // g for 'global'

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('blabla'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aib'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the new airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are now alowed on board');
  } else {
    console.log('welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('some socks and a camera');
checkBaggage('got some snacks and a gun for protection');
*/
/*
////////////////////////////////////////// WORKING WITH STRINGS 1
const airline = 'GOL Airlines';
const plane = 'AC130';

console.log(plane[0]);
console.log(plane[1]);
console.log(Number(plane[2]));
console.log(Number(plane[3]));
console.log(Number(plane[4]));

console.log(airline.length);
console.log('AC130'.length);

console.log(airline.indexOf('L'));
console.log(airline.lastIndexOf('L'));
console.log(airline.indexOf('Airlines'));

console.log(airline.slice(1));
console.log(airline.slice(1, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // b and e are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got the middle seat');
  else console.log('you got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('lucas'));
console.log(typeof new String('lucas'));
console.log(typeof new String('lucas').slice(1));
*/
/*
////////////////////////////////////////// MAPS: FUNDAMENTALS AND ITERATION
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'js'],
  ['correct', 3],
  [true, 'correct! 🛵'],
  [false, 'try again! 🏎'],
]);
console.log(question);

// convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}
// const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer)); // se answer for igual a 'correct', vai ficar true, então ele pega o true lá do array e escreve.

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
////////////////////////////////////////// MAPS: FUNDAMENTALS
// map is a data structure that we can use to map values to keys
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear(); // deletes everything inside, same as in sets

const arr = [1, 2]; // first, you would have to set a const for the array
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);
// console.log(rest.get([1, 2])); // can't
console.log(rest.get(arr)); // and then use it, now you can
*/
/*
////////////////////////////////////////// SETS
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(ordersSet);
console.log(new Set('lucas'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread')); // not in ordersSet
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('risotto');
// ordersSet.clear(); // delete all elements of the set
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

console.log(new Set('lucas').size);
*/
/*
////////////////////////////////////// LOOPING OBJECTS
// over property names
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// over property values
const values = Object.values(openingHours);
// console.log(values);

// over the entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}
*/
/*
/////////////////////////// OPTIONAL CHAINING
// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); // really messy, can get out of control easily
// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // loop over this array
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

// on methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); // exist
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist'); // dont exist

// arrays
const users = [{ name: 'lucas', email: 'lucas@gmail.com' }]; // if it was empty, this next line would not run
console.log(users[0]?.name ?? 'user array empty'); // users.name exist, so it runs
*/
/*
//////////////////////////// "FOR OF" LOOPING
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/
/*
//////////////////// NULLISH OPERATOR ON SHORT CIRCUITING
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish: null, undefined... but not 0 or ''
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/*
//////////////////////////////// SHORT CIRCUITING
console.log('----------- OR -----------');
// LOGICAL OPERATORS CAN USE ANY DATA TYPE, RETURN ANY DATA TYPE AND "SHORT CIRCUIT" (se o primeiro valor for true, já retorna)
// console.log(3 || 'lucas');
// console.log('' || 'lucas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'lucas' || 23 || true);

restaurant.numGuests = 23; // if 0 = restaurant.numGuests
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 'non'; // MANEIRA DEVAGAR
// console.log(guests1);

const guests2 = restaurant.numGuests || 10; // MANEIRA RAPIDA
console.log(guests2);

console.log('----------- AND -----------');
console.log(0 && 'lucas');
console.log('tassi' && 'lucas');
console.log('hello' && 23 && null && 'lucas');

// PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza('spinach', 'cheese');
}

restaurant.orderPizza && restaurant.orderPizza('tomato', 'ham');
*/
/*
///////////////////////////////// REST PATTERNS
// 1) DESTRUCTURING
// SPREAD - RIGHT SIDE OF THE ASSIGNMENT
const arr = [1, 2, ...[3, 4]];

// REST, LEFT SIDE OF THE EQUAL SIGN
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherfood);

// OBJECTS
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 1; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(2, 6, 1, 7, 3, 7, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
////////////////////////// SPREAD OPERATOR, NÃO PRECISA COLOCAR OS ELEMENTOS DO ARRAY, COMO FEITO EM CIMA -- IMPORTANT
const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);

// iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = 'lucas';
const letters = [...str, '', 't.'];
console.log(letters);
// console.log(`${...str} tassi`); // NÃO DÁ, MULTIPLES VALUES SEPARATED BY A COMMA

// REAL WORLD EXAMPLE
const ingredients = [
  // prompt("let's make pasta! ingredient 1?"),
  // prompt('ingredient 2?'),
  // prompt('ingredient 3?'),
];
restaurant.orderPasta(...ingredients);
console.log(ingredients);

// OBJECTS
const newRestaurant = {
  foundedIn: 2001,
  ...restaurant,
  founder: 'Lucas Tassi',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurant del Lucas';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
//////////////////////////// DESTRUCTURING OBJECTS

restaurant.orderDelivery({
  time: '22:30',
  address: 'rua 10, 200',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'rua 10, 200',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;
// console.log(open, close);
*/
/*
//////////////////////////////// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching var in the normal way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p, q, r = 1] = [8, 9]; // we can define default values
console.log(p, q, r);
*/

/////////////////////////////////////////////////////
// Coding Challenges

/* 
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
////////////////////////// CODING CHALLENGE #3 //////////////////////////////
//// 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

//// 2)
gameEvents.delete(64);

//// 3)
const time = [...gameEvents.keys()].pop();
console.log(
  `an event happened, on average, every ${time / gameEvents.size} minutes`
);

//// 4)
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
/*
////////////////////////// CODING CHALLENGE #2 ///////////////////////////////

//// 1)
for (const ex1 of game.scored) console.log(ex1);
console.log('-----------------');
for (const [i, el] of game.scored.entries()) {
  console.log(`goal ${i + 1}: ${el}`);
}

//// 2)
console.log('-----------------');
const ex2 = Object.values(game.odds);
let avg = 0;
for (const odd of ex2) avg += odd;
avg /= ex2.length;
console.log(avg);

//// 3)
console.log('-----------------');
const ex3 = Object.entries(game.odds);
for (const [team, odd] of ex3) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr}:${odd}`);
}

//// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
/*
////////////////////////////// CODING CHALLENGE #1 /////////////////////////////////
//// 1)
const [players1, players2] = game.players;
// console.log(players1, players2);

//// 2)
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//// 3)
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;

//// 6)
const printGoals = function (...players) {
  // console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Levandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored); // poderia ser assim mas da errado

//// 7)
// team1 < team2 && console.log('team 1s more likely to win');
// team1 > team2 && console.log('team 2s more likely to win');
*/
/*
////////////////////////////// CODING CHALLENGE #4 /////////////////////////////////
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// underscore_case -> underscoreCase
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
*/
