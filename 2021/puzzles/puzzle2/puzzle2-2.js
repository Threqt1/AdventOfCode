exports.run = function(input1) {
    let input = require('./prepare').run(input1);
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for (let command of input) {
        if (command.startsWith("forward")) {
            let value = +command.slice(7)
            horizontal += value
            depth += (aim * value)
        } else 
        if (command.startsWith("up")) {
            aim -= +command.slice(2)
        } else 
        if (command.startsWith("down")) {
            aim += +command.slice(4)
        }
    }
    console.log("Puzzle 2-2: " + (horizontal * depth))
}