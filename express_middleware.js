//const http = require('http');
//const requst=require('./route.js')
const express = require('express');

const app=express();
//console.log('requst');
//const server = http.createServer(requst.handler);
app.use((req,res,next)=>{
    console.log('middleware')
    next();
});
app.use((req,res,next)=>{
    console.log('middleware1')
    res.write('<h1>Hello express.js</h1>')
});
//const server = http.createServer(app);
app.listen(3000);