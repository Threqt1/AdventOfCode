const fs = require("fs");
const path = require("path");

exports.run = function (input) {
  return (input || fs.readFileSync(path.join(__dirname, "puzzle10.txt"), "utf8"))
    .split("\n")
    .map(r => r.trim());
}