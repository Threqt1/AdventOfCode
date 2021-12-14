const fs = require("fs");
const path = require("path");

exports.run = function (input) {
  return (
    input || fs.readFileSync(path.join(__dirname, "puzzle9.txt"), "utf-8")
  )
    .split("\n")
    .map((r) =>
      r
        .trim()
        .split("")
        .map((r) => +r)
    );
};
