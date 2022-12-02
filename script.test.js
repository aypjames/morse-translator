import {
  checkNormOrMorse,
  convertNormToMorse,
  convertMorseToNorm,
} from "./functionScripts.js";

describe("Tests whether the input from the user is Normal Text, Morse Code or an invalid character", () => {
  it("Should return 'Morse Code', if input text starts with either '.' or '-'", () => {
    expect(checkNormOrMorse(".--.--")).toBe("Morse Code");
    expect(checkNormOrMorse(".00029")).toBe("Morse Code");
    expect(checkNormOrMorse("-12")).toBe("Morse Code");
  });

  it("Should return 'Normal Text', if input text is every other character'", () => {
    expect(checkNormOrMorse("hello world")).toBe("Normal Text");
    expect(checkNormOrMorse("0900-/.")).toBe("Normal Text");
    expect(checkNormOrMorse("@@@")).toBe("Normal Text");
  });

  it("Should throw an error for invalid characters", () => {
    expect(checkNormOrMorse("*")).toBe("Error");
    expect(checkNormOrMorse("~")).toBe("Error");
    expect(checkNormOrMorse("}")).toBe("Error");
  });
});

describe("Testing that a 'normal' text string is converted into morse code", () => {
  it("Should return only '.', '/' or '-' characters and have spaces between each code snippet and '/' between each word", () => {
    expect(convertNormToMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(convertNormToMorse("hello")).toBe(".... . .-.. .-.. ---");
    expect(convertNormToMorse("h")).toBe("....");
    expect(convertNormToMorse("@")).toBe(".--.-.");
  });
});

describe("Testing that a morse code string is converted into 'normal' text", () => {
  it("Should only return alphabetical characters[a-z] or numbers[0-9] and some special characters. Sentences should have spaces between words", () => {
    expect(
      convertMorseToNorm(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    ).toBe("hello world");
    expect(convertMorseToNorm(".... . .-.. .-.. ---")).toBe("hello");
    expect(convertMorseToNorm("....")).toBe("h");
    expect(convertMorseToNorm(".--.-.")).toBe("@");
  });
});
