const fs = require("fs");
const path = require("path");

exports.run = (input) => {
  return (input || fs.readFileSync(path.join(__dirname, "puzzle11.txt"), "utf8")).split('\n').map(r => r.trim().split("").map(f => +f));
}
