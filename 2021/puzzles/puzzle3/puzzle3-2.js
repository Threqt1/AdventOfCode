function findOxy(input, index = 1) {
    if (input.length === 1) return input[0]
    let i; 
    let length = input.length;
    let ones = 0;
    let zeros = 0;
    let filtered = [];
    for (i = 0; i < length; i++) {
        if (input[i][index] === "1") {
            ones++
        } else {
            zeros++;
        }
    }
    if (ones >= zeros) {
        for (i = 0; i < length; i++) {
            if (input[i][index] === "1") {
                filtered.push(input[i])
            }
        }   
    } else {
        for (i = 0; i < length; i++) {
            if (input[i][index] === "0") {
                filtered.push(input[i])
            }
        }          
    }
    return findOxy(filtered, index+1)
}

function findCo2(input, index = 1) {
    if (input.length === 1) return input[0]
    let i;
    let length = input.length;
    let ones = 0;
    let zeros = 0;
    let filtered = [];
    for (i = 0; i < length; i++) {
        if (input[i][index] === "1") {
            ones++
        } else {
            zeros++;
        }
    }
    if (zeros <= ones) {
        for (i = 0; i < length; i++) {
            if (input[i][index] === "0") {
                filtered.push(input[i])
            }
        } 
    } else {
        for (i = 0; i < length; i++) {
            if (input[i][index] === "1") {
                filtered.push(input[i])
            }
        }   
    }
    return findCo2(filtered, index+1)
}

exports.run = function(input1) {
    let input = require('./prepare').run(input1);
    let oxyArr = []
    let co2Arr = []
    let i;
    let ones = 0;
    let zeros = 0;
    let length = input.length;
    for (i = 0; i < length; i++) {
        if (input[i][0] === "1") {
            ones++
        } else {
            zeros++
        }
    }
    if (ones >= zeros) {
        for (i = 0; i < length; i++) {
            if (input[i][0] === "1") {
                oxyArr.push(input[i]);
            } else {
                co2Arr.push(input[i]);
            }
        }
    } else {
       for (i = 0; i < length; i++) {
            if (input[i][0] === "1") {
                co2Arr.push(input[i]);
            } else {
                oxyArr.push(input[i]);
            }
        } 
    }
    let oxyGen = parseInt(findOxy(oxyArr), 2);
    let co2Gen = parseInt(findCo2(co2Arr), 2);
    console.log("Puzzle 3-2: " + (oxyGen * co2Gen))
}