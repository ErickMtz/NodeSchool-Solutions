var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

var arr = str.split('\n');
var length = arr.length - 1;
console.log(length);
