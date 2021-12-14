exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let greaterThan = 0;
  let previous = input[0];
  let length = input.length;
  let i;
  for (i = 1; i < length; i++) {
    let currentValue = input[i];
    if (currentValue > previous) greaterThan++;
    previous = currentValue;
  }
  console.log("Puzzle 1-1: " + greaterThan);
};
