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
  // ",": "--..--",
  // ".": ".-.-.-",
  // "?": "..--..",
  // ";": "-.-.-.",
  // ":": "---...",
  // "/": "-..-.",
  // "-": "-....-",
  // "(": "-.--.",
  // ")": "-.--.-",
  // "=": "-...-",
  // "+": ".-.-.",
  // "@": ".--.-.",
};

export const checkNormOrMorse = (string) => {
  if (string[0] === "." || string[0] === "-") {
    return "Morse Code";
  } else {
    return "Normal Text";
  }
};

export const invalidCharCheck = (string) => {
  const StrToArr = string.split("");
  const invalidChars = /^[a-zA-Z0-9-/.]*$/;
  const invalidCharsArr = StrToArr.filter((y) => !y.match(invalidChars));
  return invalidCharsArr;
};

export const convertNormToMorse = (string) => {
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

export const convertMorseToNorm = (string) => {
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
