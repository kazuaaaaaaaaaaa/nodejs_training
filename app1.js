const http = require('http');

var server = http.createServer(
  (request,response)=>{
    response.end('Hello Node.js!');
    response.end('This is my first code');
  }
);
server.listen(3000);
