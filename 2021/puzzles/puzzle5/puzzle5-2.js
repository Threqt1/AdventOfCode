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
        } else {
            let yCheck;
            let yCrement;
            if (y1 > y2) {
                yCheck = y => y >= y2;
                yCrement = y => y - 1;
            } else {
                yCheck = y => y <= y2;
                yCrement = y => y + 1;
            }
            let xCheck;
            let xCrement;
            if (x1 > x2) {
                xCheck = x => x >= x2;
                xCrement = x => x - 1;
            } else {
                xCheck = x => x <= x2;
                xCrement = x  => x  + 1;
            }
            for (let x = x1, y = y1; yCheck(y) && xCheck(x); x = xCrement(x), y = yCrement(y)) {
                let key = x+","+y;
                let currentValue = grid.get(key);
                if (currentValue === undefined) currentValue = 0
                grid.set(key, currentValue + 1);
            }
        }
    }
    for (let value of grid.values()) {
        if (value > 1) intersections++;
    }
    console.log("Puzzle 5-2: " + intersections)
}