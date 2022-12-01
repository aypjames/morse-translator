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
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ",": "--..--",
  ".": ".-.-.-",
  "?": "..--..",
  ";": "-.-.-.",
  ":": "---...",
  "/": "-..-.",
  "-": "-....-",
  "(": "-.--.",
  ")": "-.--.-",
  "=": "-...-",
  "+": ".-.-.",
  "@": ".--.-.",
};

// NEEED TO HIGHLIGHT WHAT COULD NOT BE TRANSLATED! EG> *

const userInput = document.getElementById("userInput");
const appOutput = document.getElementById("appOutput");

const checkNormOrMorse = (string) => {
  if (string[0] === "." || string[0] === "/" || string[0] === "-") {
    return "Morse Code";
  } else {
    return "Normal Text";
  }
};

const convertNormToMorse = (string) => {
  // Converts the String to UpperCase
  // Splits the string to individual characters in an array.
  // Map through the strToArr array and For each character in the array, check value against the key from the moreAlphabet object and return the value.
  // Join the array together to form a single string

  const morseStrToUpperCase = string.toUpperCase();
  const morseStrToArr = morseStrToUpperCase.split("");
  const normToMorse = morseStrToArr.map((X) => morseAlphabet[X]);
  const outPut = normToMorse.join(" ");

  return outPut;
};

const convertMorseToNorm = (string) => {
  // Splits the string to individual morse codes in an array.
  // Map through the strToArr array and For each code in the array, find the key from the moreAlphabet object by checking against value and return the value.
  // Join the array together to form a single string
  // Convert to lowercase

  const normStrToArr = string.split(" ");
  const morseToNorm = normStrToArr.map((morseCodeValue) => {
    const objKeysArr = Object.keys(morseAlphabet);
    return objKeysArr.find((key) => morseAlphabet[key] === morseCodeValue);
  });
  const outPut = morseToNorm.join("");

  return outPut.toLowerCase();
};

console.log(convertMorseToNorm(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")); // Should return hello world

console.log(convertNormToMorse("hello world")); // Should return .... . .-.. .-.. --- / .-- --- .-. .-.. -..

const langDetected = document.getElementById("langDetected");

const domManipulation = () => {
  userInput.addEventListener("keyup", () => {
    appOutput.innerText = "";

    const inputValue = userInput.value;

    const langCheck = checkNormOrMorse(inputValue);

    let convertedText = "";

    if (langCheck === "Morse Code") {
      convertedText = convertMorseToNorm(inputValue);
    } else {
      convertedText = convertNormToMorse(inputValue);
    }

    langDetected.innerText = "";
    langDetected.innerText =
      inputValue === ""
        ? "Language Detected:"
        : `Language Detected: ${langCheck}`;

    appOutput.innerText = convertedText;
  });
};

domManipulation();

//
// How to handle numbers and stuff? throw error that currently this version only handles words?

// Check for random character - using regex?
// https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-letters
//  https://cs.lmu.edu/~ray/notes/regex/
