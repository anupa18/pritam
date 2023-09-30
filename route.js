const fs = require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile("books.txt", "utf-8",(err,data)=>{
          // This line uses the 'fs.readFile' method to asynchronously read the contents of the "books.txt" file.
          // It specifies the file's encoding as "utf-8" to ensure that the data is read as text.
          // It takes a callback function with two parameters: 'err' for error handling and 'data' for the file content.
          if (err){
          console.log(err);
        }
        //console.log('data from file =',data)
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body>${data}</body>`)
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>`);
        res.write('</html>');
        return res.end();
      });
    }
    else if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
          // This line adds an event listener for the 'data' event of the incoming request (req).
          // The 'data' event is emitted whenever a new chunk of data is received in the request body.
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
          // This line adds an event listener for the 'end' event of the incoming request (req).
          // The 'end' event is emitted when the entire request body has been received.
            const parsedBody=Buffer.concat(body).toString();
            // Here, we concatenate all the chunks of data in the 'body' array using 'Buffer.concat',
            // and then convert the concatenated Buffer into a string using 'toString()'.
            // This gives us the complete request body as a string.
            const message = parsedBody.split('=')[1];
            // This line parses the request body (parsedBody) to extract the value of the 'message' field.
            // It does this by splitting the string using '=' as a delimiter and taking the second part (index 1),
            // which corresponds to the value of the 'message' field in a typical URL-encoded form submission.
            //fs.writeFileSync('message.txt', message);
            fs.writeFile("books.txt", message, (err) => {
                if (err){
                  console.log(err);
                }
                console.log("File written successfully with", message);
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
              });
        });
    }
    else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
    }
};
//module.exports=requestHandler;

//module.exports={
//    handler:requestHandler,
//    text:'hi my name is khan'
//};

module.exports.handler=requestHandler;
module.exports.text='hi my name is khan';
