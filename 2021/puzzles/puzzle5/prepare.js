const fs = require('fs')
const path = require('path')

exports.run = function(input) {
    return (input || fs.readFileSync(path.join(__dirname, "puzzle5.txt"), "utf8")).split('\n').map(r => r.replace(/\r/g, '').split(' -> ').map(r => r.split(',').map(r => +r)))
}