const { readFile, writeFile, write } = require('fs');

readFile('./Content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  first = result;
  readFile('./Content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    second = result;
    writeFile(
      './Content/async-result',
      `Hey this is async file. you have previous file contents that are first: ${first} second:${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
