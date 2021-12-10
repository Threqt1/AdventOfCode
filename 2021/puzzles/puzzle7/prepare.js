const fs = require('fs')
const path = require('path')

exports.run = function (input) {
    return (input || fs.readFileSync(path.join(__dirname, "puzzle7.txt"), "utf8")).split(",").map(r => r.trim()).map(r => +r).sort((a, b) => a - b)
}