//const http = require('http');
//const requst=require('./route.js')
const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: false}));
//console.log('requst');
//const server = http.createServer(requst.handler);
app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product" method="post"><input type="text" name="title" id="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    //res.send('<form action="/product" method="post"><input type="number" name="size"><button type="submit">Add Product</button></form>')
});
// app.post('/product',(req,res,next)=>{
//     // const n=req.body.title;
//     // const s=req.body.size;
//     //console.log(req.body)
//     //console.log(req.body.size)
    
//     res.redirect('/')
// });
app.use('/',(req,res,next)=>{
    //console.log(`<h1>${document.getElementById("title").value}</h1>`)
    //res.send(`product name is : ${title}`)
    //res.send('<h1>hello express.js!</h1>')
    const n=req.body.title;
    const s=req.body.size;
    console.log('product name : ', n)
    console.log('product name : ', s)
    res.send(`Product Name: ${n}, Product Size: ${s}`);
});
//const server = http.createServer(app);
app.listen(3000);