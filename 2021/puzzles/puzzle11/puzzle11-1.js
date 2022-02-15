exports.run = (input1) => {
  let input = require("./prepare").run(input1);
  let step = 0;
  let flashes = 0;
  for (step = 1; step <= 100; step++) {
    let flashed = [[], [], [], [], [], [], [], [], [], []]
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        input[i][j]++;
      }
    }
    let x = -1;
    let y = -1
    while((x = input.findIndex((r, i1) => (y = r.findIndex((j, i2) => j > 9 && flashed[i1][i2] !== true)) > -1)) > -1) {
      flashed[x][y] = true;
      flashes++;
      if (x - 1 >= 0) {
        input[x-1][y]++;
      }
      if (x + 1 < input[0].length) {
        input[x+1][y]++;
      }
      if (y - 1 >= 0) {
        input[x][y-1]++;
      }
      if (y + 1 < input.length) {
        input[x][y+1]++;
      }
      if (x - 1 >= 0 && y - 1 >= 0) {
        input[x-1][y-1]++;
      }
      if (x + 1 < input[0].length && y + 1 < input.length) {
        input[x+1][y+1]++;
      }
      if (x + 1 < input[0].length && y - 1 >= 0) {
        input[x+1][y-1]++;
      }
      if (x - 1 >= 0 && y + 1 < input.length) {
        input[x-1][y+1]++;
      }
    }
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (input[i][j] > 9) input[i][j] = 0
      }
    }
  }
  console.log("Puzzle 11-1: " + flashes)
}