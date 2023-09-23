const http=require('http');
const server=http.createServer((req,res)=>{
    //res.end('Anupam')
    console.log(req.url,req.method,req.headers)
    let url=req.url
    //process.exit()
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>This is may page</title></head>')
    if (url=='/home'){
        res.write('<body><h1>Welcome home</h1></body>')
    }
    if (url=='/url'){
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    }
    if (url=='/about'){
        res.write('<body><h1>Welcome to About Us page</h1></body>')
    }
    
    //res.write('</body>')
    res.write('</html>')
    res.end()
})
server.listen(4000)