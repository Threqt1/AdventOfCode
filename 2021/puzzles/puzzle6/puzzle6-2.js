exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let frequency = new Map([
    ["0", 0],
    ["1", 0],
    ["2", 0],
    ["3", 0],
    ["4", 0],
    ["5", 0],
    ["6", 0],
    ["7", 0],
    ["8", 0],
  ]);
  for (let i of input) {
    frequency.set(i.toString(), frequency.get(i.toString()) + 1);
  }
  for (let i = 0; i < 256; i++) {
    let prevZero = frequency.get("0");
    frequency.set("0", frequency.get("1"));
    frequency.set("1", frequency.get("2"));
    frequency.set("2", frequency.get("3"));
    frequency.set("3", frequency.get("4"));
    frequency.set("4", frequency.get("5"));
    frequency.set("5", frequency.get("6"));
    frequency.set("6", frequency.get("7") + prevZero);
    frequency.set("7", frequency.get("8"));
    frequency.set("8", prevZero);
  }
  console.log(
    "Puzzle 6-2: " +
      (frequency.get("0") +
        frequency.get("1") +
        frequency.get("2") +
        frequency.get("3") +
        frequency.get("4") +
        frequency.get("5") +
        frequency.get("6") +
        frequency.get("7") +
        frequency.get("8"))
  );
};
