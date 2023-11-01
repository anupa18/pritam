//const http = require('http');
//const requst=require('./route.js')
const express = require('express');
const bodyParser= require('body-parser');

const app=express();

const adminRoute=require('./routers/admin');
const shopRoute=require('./routers/shop');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoute);
app.use('/admin',shopRoute);
//console.log('requst');
//const server = http.createServer(requst.handler);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});


//const server = http.createServer(app);
app.listen(3000);