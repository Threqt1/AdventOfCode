exports.run = function (input1) {
    let input = require('./prepare').run(input1);
    let numbers = input[0].split(',').map(r => +r)
    let winBoard;
    let justCalled;
    for (let number of numbers) {
        for (let board of input[1]) {
            for (let row of board) {
                let index = row.findIndex(r => r === number);
                if (index > -1) {
                    row[index] = 'X'
                }
            }
        }
        let b1 = false;
        for (let j = 0; j < input[1].length; j++) {
            let board = input[1][j]
            let b = false;
            for (let row of board) {
                if (row.join('') === 'XXXXX') {
                    winBoard = board;
                    b = true;
                    break;
                }
            }
            for (let i = 0; i < board[0].length; i++) {
                let test = "";
                for (let j = 0; j < board.length; j++) {
                    test += board[j][i];
                }
                if (test === 'XXXXX') {
                    winBoard = board;
                    b = true;
                    break;
                }
            }
            if (b) {
                if (input[1].length === 1) {
                    b1 = true
                    winBoard = board
                    break;
                } else {
                    input[1].splice(j, 1)
                }
            }
        }
        if (b1) {
            justCalled = number;
            break;
        }
    }
    console.log("Puzzle 4-1: " + justCalled * winBoard.map(r => {
        let filtered = r.filter(r => r != 'X')
        if (filtered.length > 0) {
            return filtered.reduce((a, b) => a + b)
        } else {
            return 0
        }
    }).reduce((a, b) => a + b))
}