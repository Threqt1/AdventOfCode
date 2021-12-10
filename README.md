# 🎄 AdventOfCode Attempts by Threqt 
<img src="https://img.shields.io/badge/language-javascript-yellow">

My attempts at the [Advent of Code](https://adventofcode.com)

## 📋 Requirements
- [Node.js >= 14](https://nodejs.org/en/)

## 💻 Usage
```
node index.js
```

### a. Importing a year's puzzles
Every puzzle is contained within its own unique folder, which is then encompassed by an overarching folder for the year's puzzles. 
To use puzzles from that specific year's folder, simply use:

```JavaScript
const yearsPuzzles = require("./year/index");
```

For example, if I wanted code from 2021's Advent of Code puzzles:

```JavaScript
const v2021 = require("./2021/index");
```

### b. Executing a year's puzzle
To execute a puzzle, follow the following format:

```JavaScript
<year>.puzzle(puzzle, subpuzzle, optionalInput);
```

For example, if I wanted to run 2021's Puzzle 1, Sub-puzzle 2:

```JavaScript
const v2021 = require("./2021/index");

let input = `199
200
208
210
200
207
240
269
260
263`

v2021.puzzle(1, 2, input);
```

Expected output:

```
Puzzle 1-2: 5
```
