exports.run = function (input1) {
    let input = require("./prepare").run(input1)
    let sum = 0;
    /*
 dddd
e    a
e    a
 ffff
g    b
g    b
 cccc

need 6
6 - g
9 - a
0 - !f

need 5
2 - g
5 - e
3 - b

needs 2 - 1
needs 4 - 4
needs 3 - 7
needs 7 - 8
    */
   
    console.log("Puzzle 8-2: " + sum);
}