exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let error = 0;
  let points = { "}": 1197, ">": 25137, ")": 3, "]": 57 };
  let pairs = { "{": "}", "<": ">", "(": ")", "[": "]" };
  for (let str of input) {
    let holder = [];
    for (let i = 0; i < str.length; i++) {
      if (i + 1 === str.length) break;
      let character = str[i];
      if (["{", "[", "<", "("].includes(character)) holder.push(character);
      else {
        if (character !== pairs[holder.pop()]) {
          error += points[character];
        }
      }
    }
  }
  console.log("Puzzle 10-1: " + error);
};
