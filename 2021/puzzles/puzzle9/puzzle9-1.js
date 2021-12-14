exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let sum = 0;
  for (let column = 0; column < input.length; column++) {
    for (let row = 0; row < input[column].length; row++) {
      let adjacent = [];
      if (row - 1 >= 0) {
        adjacent.push(input[column][row - 1]);
      }
      if (row + 1 < input[column].length) {
        adjacent.push(input[column][row + 1]);
      }
      if (column - 1 >= 0) {
        adjacent.push(input[column - 1][row]);
      }
      if (column + 1 < input.length) {
        adjacent.push(input[column + 1][row]);
      }
      if (adjacent.every((r) => input[column][row] < r)) {
        sum += 1 + input[column][row];
      }
    }
  }
  console.log("Puzzle 9-1: " + sum);
};
