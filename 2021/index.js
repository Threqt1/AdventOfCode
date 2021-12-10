module.exports = {
    puzzle: function (puzzle, subpuzzle, input) {
        if (puzzle >= 1 && puzzle <= 25) {
            if (subpuzzle === 1 || subpuzzle === 2) {
                require('./puzzles/puzzle' + puzzle + "/puzzle"+puzzle+"-"+subpuzzle).run(input);
            }
        }
    }
}