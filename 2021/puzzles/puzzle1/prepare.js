const fs = require("fs");
const path = require("path");

exports.run = function (input) {
  return (input || fs.readFileSync(path.join(__dirname, "puzzle1.txt"), "utf8"))
    .split("\n")
    .map((r) => r.trim())
    .map((r) => parseInt(r));
};
