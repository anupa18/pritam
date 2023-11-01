const express = require('express');
const router=express.Router();


router.get('/shop',(req,res,next)=>{
    //console.log(`<h1>${document.getElementById("title").value}</h1>`)
    //res.send(`product name is : ${title}`)
    res.send('<h1>hello express.js!</h1>')
    
    // const n=req.body.title;
    // const s=req.body.size;
    // console.log('product name : ', n)
    // console.log('product name : ', s)
    // res.send(`Product Name: ${n}, Product Size: ${s}`);
});

module.exports=router;