const fs = require('fs')
const path = require('path')

exports.run = function (input) {
    const _puzzle4Input = (input || fs.readFileSync(path.join(__dirname, "puzzle4.txt"), "utf8")).split('\n')
    const puzzle4Input = [_puzzle4Input[0].replace(/\r/g, ''), []]
    const bingoBoards = _puzzle4Input.slice(2);
    let board = [];
    for (let line of bingoBoards) {
        if (line.trim().replace(/\r/g, '') === "") {
            puzzle4Input[1].push(board)
            board = []
        } else {
            board.push(line.replace(/\r/g, '').split(" ").filter(r => r != "").map(r => +r))
        }
    }
    return puzzle4Input
}