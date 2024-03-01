const { readFileSync, writeFileSync } = require('fs');
// the above representation is the same as the below representation.
// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');

console.log(first);
console.log(second);
writeFileSync(
  './Content/result-sync.txt',
  `Here is the result: ${first} ${second}`
);
