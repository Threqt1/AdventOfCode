const fs = require("fs");
const path = require("path");

exports.run = function (input) {
    return (input || fs.readFileSync(path.join(__dirname, "puzzle8.txt"), "utf8")).split("\n").map(r => r.trim()).map(b => b.split(" | ")[1].split(" "))
}