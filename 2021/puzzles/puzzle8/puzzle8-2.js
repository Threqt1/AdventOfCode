exports.run = function (input1) {
  let input = require("./prepare").run(input1);
  let sum = 0;
  /*

9: one, four
3: one, 1four
5: 1one, four
2: 1one, 1four
6: 1one, 2four
    */
  for (let output of input) {
    let one = output[0].find((r) => r.length === 2).split("");
    let four = output[0].find((r) => r.length === 4).split("");
    let seven = output[0].find((r) => r.length === 3).split("");
    let fourNotOne = four.filter((r) => one.includes(r) === false);
    let decryptedNumber = "";
    for (let number of output[1]) {
      number = number.split("");
      if (number.length === 7) {
        decryptedNumber += "8";
      } else if (number.length === 2) {
        decryptedNumber += "1";
      } else if (number.length === 4) {
        decryptedNumber += "4";
      } else if (number.length === 3) {
        decryptedNumber += "7";
      } else {
        if (one.every((r) => number.includes(r))) {
          if (number.length === 5) {
            decryptedNumber += "3";
          } else {
            if (four.every((r) => number.includes(r))) {
              decryptedNumber += "9";
            } else {
              decryptedNumber += "0";
            }
          }
        } else {
          if (fourNotOne.every((r) => number.includes(r))) {
            if (number.length === 6) {
              decryptedNumber += "6";
            } else {
              decryptedNumber += "5";
            }
          } else {
            decryptedNumber += "2";
          }
        }
      }
    }
    sum += parseInt(decryptedNumber, 10);
  }

  console.log("Puzzle 8-2: " + sum);
};
