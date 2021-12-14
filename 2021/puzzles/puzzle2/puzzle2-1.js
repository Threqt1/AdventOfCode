exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let horizontal = 0;
  let depth = 0;
  for (let command of input) {
    if (command.startsWith("forward")) {
      horizontal += +command.slice(7);
    } else if (command.startsWith("down")) {
      depth += +command.slice(4);
    } else if (command.startsWith("up")) {
      depth -= +command.slice(2);
    }
  }
  console.log("Puzzle 2-1: " + horizontal * depth);
};
