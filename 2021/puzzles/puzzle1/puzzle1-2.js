exports.run = function(input1) {
    let input = require('./prepare').run(input1);
    let greaterThan = 0;
    let threePanes = input.length - 2;
    let previous = input[0] + input[1] + input[2];
    let i;
    for (i = 1; i < threePanes; i++) {
        let currentValue = input[i] + input[i + 1] + input[i + 2];
        if (currentValue > previous) greaterThan++;
        previous = currentValue;
    }
    console.log("Puzzle 1-2: " + greaterThan)
}