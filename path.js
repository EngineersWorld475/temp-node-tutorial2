const path = require('path');
//return the path seperator "/"
console.log(path.sep);
// returns the whole path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
// just returns the last file of the path
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
