exports.run = function (input1) {
    let input = require("./prepare").run(input1);
    let answer;
    for (let i = 0; i <= input[input.length - 1]; i++) {
        let _answer = 0;
        for (let number of input) {
            _answer += Math.abs(number - i);
        }
        if (!answer || _answer < answer) {
            answer = _answer
        }
    }
    console.log("Puzzle 7-1: " + answer)
}