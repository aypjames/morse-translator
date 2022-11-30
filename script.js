const morseAlphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

// Function for Data
// get the input and convert to an array?
// get input value
// split by each letter and push to an array

// Module for Morse Translation/ Logic Function
// check each letter and spacing through the morse code.

// Module for Dom Manipulation
// paste result into the output div

const convertToMorse = (string) => {
  // Converts the String to UpperCase
  const strtoUpperCase = string.toUpperCase();

  // Splits the string to individual characters in an array.
  const strToArr = strtoUpperCase.split("");

  // Map through the strToArr array and For each character in the array, check value against the key from the moreAlphabet object and return the value.
  const engToMorse = strToArr.map((X) => morseAlphabet[X]);

  // Join the array together to form a single string
  const outPut = engToMorse.join(" ");

  return outPut;
};

const convertToEng = (string) => {
  // split by space
  // check array against morseAlphabet object value to get key. PRobs have to use object.entries?
  // Join the array together to form the string.
};

console.log(convertToMorse("hello world"));

// How to handle numbers and stuff? throw error that currently this version only handles words?

// Check for random character
// https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-letters
//  https://cs.lmu.edu/~ray/notes/regex/

// const checkEngOrMorse = (string) => {
//   if (string[0] === "." || string[0] === "/" || string[0] === "-") {
//     return "String is Morse";
//   } else if (string[0]) {
//     return "String is English";
//   }
// };
