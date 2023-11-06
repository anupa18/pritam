const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/',(req,res,next)=>{
    fs.readFile("anupam.txt",(err,data)=>{
        if(err){  
        console.log(err)
        data='No Chat Exists';
        }
        res.send(`${data}<form onsubmit='document.getElementById("username").value=localStorage.getItem("username")' action="/" method="POST"><label for="message">Message:</label><input type="hidden" name="username" id="username"><input type="text" name="message" id="message"><button type="submit">Send</button></form>`);
    }); 
    
    
    
    
    
});

router.post('/',(req,res,next)=>{
    fs.writeFile("anupam.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=> err?console.log(err):res.redirect('/'));
   
});
module.exports=router;