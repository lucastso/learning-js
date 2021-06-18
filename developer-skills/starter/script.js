// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///// USING GOOGLE, STACKOVERFLOW AND MDN /////
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? difference between highest and lowest temp
// - how to compute max and min temperatures?
// - what's a sensor error

// 2) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// problem 2
// function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - with 2 arrays, implement twice? no, just merge the two

// 2) Breaking up into sub-problems
// how to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

///// DEBUGGING WITH THE CONSOLE AND BREAKNG POINTS /////
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("degrees celsius:")),
    value: 10,
  };
  // B) FIND
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A: IDENTIFY
console.log(measureKelvin());

console.log("-------SECOND EXAMPLE-------");
// USING A DEBUGGER
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/
/*
-------------------- CODING CHALLENGE #1 ---------------------
*/

// 1) Understanding the problem
// - array transformed to string, separated by ...
// - whats is the X days? index + 1

// 2) Breaking up into sub-problems
// - transform the array into string
// - transform each element to string with °C
// - string neeeds to contain day (index + 1)
// - add the 3 dots between the elements and start and end of string
// - log string to the console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
  `${data1[0]}°C in 1 day ... ${data1[1]}°C in 2 days ... ${data1[2]}°C in 3 days`
);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
