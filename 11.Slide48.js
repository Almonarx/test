//1
const date = new Date;
const fileName = process.argv[1].split('\\');

console.log(date.toLocaleString());
console.log(fileName[fileName.length - 1]);

//2
const getRandom = require('./11.Slide48.2.getRandom');

console.log(getRandom(0, 100));