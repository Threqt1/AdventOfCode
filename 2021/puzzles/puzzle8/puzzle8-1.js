exports.run = function (input1) {
    let input = require("./prepare").run(input1)
    let uniques = 0;
    for (let output of input) {
        uniques += output.filter(r => r.length === 2 || r.length === 3 || r.length === 4 || r.length === 7).length
    }
    console.log("Puzzle 8-1: " + uniques);
}