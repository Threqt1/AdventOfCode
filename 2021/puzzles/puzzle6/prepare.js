const fs = require('fs')
const path = require('path')

exports.run = function (input) {
    return (input || fs.readFileSync(path.join(__dirname, 'puzzle6.txt'), "utf8")).split(',').map(r => r.trim()).map(r => +r);
}