const { link } = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Welcome to our home page');
  } else if (req.url == '/about') {
    res.end('This is a short description of as');
  } else {
    res.end(`<p>Oops...can't find the requested page you are looking for</p>
       <a href='/'>Back to home</a>`);
  }
});

server.listen(5000);
console.log('server started on port 5000');
