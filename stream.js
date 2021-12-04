const fs =require('fs')
const server= require('http').createServer();

server.on('request',(req,res)=>{
    // SOLUTION 1 
    // fs.readFile('test-file.txt',(err,data)=>{
    //     if(err) console.log('ERROR')
    //     res.end(data)
    // })
    // SOLUTION 2
    const readable = fs.createReadStream('test-file.txt')
    readable.pipe(res)
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("SERVER LISTENING ......");
})