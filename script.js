import {
  checkNormOrMorse,
  invalidCharCheck,
  convertNormToMorse,
  convertMorseToNorm,
} from "./functionScripts.js";

// NEED TO HIGHLIGHT WHAT COULD NOT BE TRANSLATED! EG the character  "*"

const userInput = document.getElementById("userInput");
const appOutput = document.getElementById("appOutput");
const invalidInputs = document.getElementById("invalidInputs");
const langDetected = document.getElementById("langDetected");
// Gathering Inputs and posting outputs.

const domManipulation = () => {
  userInput.addEventListener("keyup", () => {
    appOutput.innerText = "";
    invalidInputs.innerText = "";

    const inputValue = userInput.value;

    const langCheck = checkNormOrMorse(inputValue);

    const invalidCharList = invalidCharCheck(inputValue);
    console.log(invalidCharList);

    if (!invalidCharList.length) {
      invalidInputs.innerText = "";
    } else {
      const message = `The following characters are invalid and have been ignored in the translation: ${invalidCharList.join(
        ", "
      )}`;
      invalidInputs.innerText = message;
    }

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
