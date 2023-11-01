const express = require('express');
const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" id="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    //res.send('<form action="/product" method="post"><input type="number" name="size"><button type="submit">Add Product</button></form>')
});
router.post('/add-product',(req,res,next)=>{
    // const n=req.body.title;
    // const s=req.body.size;
    console.log(req.body)
    //console.log(req.body.size)
    
    res.redirect('/admin/shop')
});

module.exports=router;

