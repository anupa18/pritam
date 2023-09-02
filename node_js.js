const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('Anupam')
})
server.listen(4000)