const express = require('express');
const router=express.Router();


router.get('/login',(req,res,next)=>{
    
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><label for="username">Username:</label><input type="text" name="username" id="username"><button type="submit">Login</button></form>')
    
    
});
router.post('/login',(req,res,next)=>{
    const usr=req.body.username;
    res.redirect('/')
});

module.exports=router;

