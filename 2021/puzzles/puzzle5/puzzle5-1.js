exports.run = function (input1) {
    let input = require("./prepare").run(input1)
    let intersections = 0
    let grid = new Map();
    for (let [[x1, y1], [x2, y2]] of input) {
        if (y1 === y2) {
            for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
                let key = i+","+y1;
                let currentValue = grid.get(key);
                if (currentValue === undefined) currentValue = 0
                grid.set(key, currentValue + 1);
            }
        } else 
        if (x1 === x2) {
            for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
                let key = x1+","+i;
                let currentValue = grid.get(key);
                if (currentValue === undefined) currentValue = 0
                grid.set(key, currentValue + 1);
            }
        }
    }
    for (let value of grid.values()) {
        if (value > 1) intersections++;
    }
    console.log("Puzzle 5-1: " + intersections)
}