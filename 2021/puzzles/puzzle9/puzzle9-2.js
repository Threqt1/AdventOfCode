let visited = new Map();

function recurse(input, [column, row], previous) {
  if (visited.get(column + "," + row) === true) return 0;
  if (input[column][row] === 9 || input[column][row] <= previous) return 0;
  visited.set(column + "," + row, true);
  let current = input[column][row];
  let currentlyFound = 1;
  let possibleVisits = [];
  if (row - 1 >= 0) {
    possibleVisits.push([column, row - 1]);
  }
  if (row + 1 < input[column].length) {
    possibleVisits.push([column, row + 1]);
  }
  if (column - 1 >= 0) {
    possibleVisits.push([column - 1, row]);
  }
  if (column + 1 < input.length) {
    possibleVisits.push([column + 1, row]);
  }
  for (let visit of possibleVisits) {
    currentlyFound += recurse(input, visit, current);
  }
  return currentlyFound;
}

exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let basin_starts = [];
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
        basin_starts.push([column, row]);
      }
    }
  }
  let basins = [];
  for (let basin of basin_starts) {
    basins.push(recurse(input, basin, input[basin[0]][basin[1]] - 1));
  }
  console.log(
    basins
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a * b)
  );
};
