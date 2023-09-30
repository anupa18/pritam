const http = require('http');
const requst=require('./route.js')
console.log(requst.text);
const server = http.createServer(requst.handler);
server.listen(4000);