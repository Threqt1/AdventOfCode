const fs = require('fs')
const path = require('path')

exports.run = function (input) {
    return (input || (fs.readFileSync(path.join(__dirname, "puzzle2.txt"), "utf8"))).split('\n').map(r => r.trim()).map(r => r.slice(0, r.length - 1))
}