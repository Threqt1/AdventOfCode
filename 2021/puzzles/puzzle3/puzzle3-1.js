exports.run = function (input1) {
    let input = require('./prepare').run(input1);
    let gamma = "";
    let epsilon = "";
    let i, j, ones, zeros;
    let length = input.length;
    let firstLength = input[0].length;
    for (i = 0; i < firstLength; i++) {
        ones = 0;
        zeros = 0;
        for (j = 0; j < length; j++) {
            if (input[j][i] === "1") {
                ones++;
            } else { 
                zeros++;
            }
        }
        if (ones > zeros) {
            gamma += "1"
            epsilon += "0";
        } else {
            gamma += "0";
            epsilon += "1";
        }
    }
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);
    console.log("Puzzle 3-1: " + (gamma * epsilon))
}