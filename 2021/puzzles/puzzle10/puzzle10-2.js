exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let error = [];
  let points = { "{": 3, "<": 4, "(": 1, "[": 2 };
  let pairs = { "{": "}", "<": ">", "(": ")", "[": "]" };
  for (let str of input) {
    let holder = [];
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (["{", "[", "<", "("].includes(character)) holder.push(character);
      else {
        if (character !== pairs[holder.pop()]) {
          break;
        }
      }
      if (i + 1 === str.length) {
        let temp = 0;
        for (let held of holder.reverse()) {
          temp = temp * 5 + points[held];
        }
        error.push(temp);
      }
    }
  }
  console.log(
    "Puzzle 10-2: " + error.sort((a, b) => a - b)[Math.trunc(error.length / 2)]
  );
};
