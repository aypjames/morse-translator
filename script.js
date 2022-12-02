import {
  checkNormOrMorse,
  convertNormToMorse,
  convertMorseToNorm,
} from "./functionScripts.js";

// NEED TO HIGHLIGHT WHAT COULD NOT BE TRANSLATED! EG the character  "*"

const userInput = document.getElementById("userInput");
const appOutput = document.getElementById("appOutput");
// Gathering Inputs and posting outputs.

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

console.log(convertMorseToNorm(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")); // Should return hello world

console.log(convertNormToMorse("hello world")); // Should return .... . .-.. .-.. --- / .-- --- .-. .-.. -..

//
// How to handle numbers and stuff? throw error that currently this version only handles words?

// Check for random character - using regex?
// https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-letters
//  https://cs.lmu.edu/~ray/notes/regex/
