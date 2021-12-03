const EventEmitter = require('events')
const http = require('http')


class Sales extends EventEmitter {
    constructor() {
        super()
    }
}
const myEmitter = new Sales();

myEmitter.on('newsales',()=>{console.log('There is New Sale');})
myEmitter.on('newsales',()=>{console.log('Customar Name ALMAMUN');})
// myEmitter.on('newsales',stock =>{console.log(`Here we Have ${stock} Item Has Left`);})
myEmitter.on('newsales', stock=>{console.log(`There is ${stock} item has left`)})

myEmitter.emit('newsales',9)

server = http.createServer();
server.on('request',(req,res)=>{
    console.log('REQUEST RECEIVED');
    console.log(req.url);
    res.end('REQUEST RECEIVED')
})
server.on('request',(req,res)=>{
    console.log('ANOTHER REQUEST SERVER')
})
server.on('close',()=>{console.log('CLOSED SERVER')})
server.listen(8000,'127.0.0.1',()=>{console.log('new START')})