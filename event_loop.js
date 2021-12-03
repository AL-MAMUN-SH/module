const fs = require('fs');
const crypto = require('crypto');


// process.env.UV_THREADPOOL_SIZE=2
const start =Date.now();
process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log('Timer 1 Finished'),0);
setImmediate(() => console.log('IMMIDIATE 1 FINISHED'))
 
 fs.readFile('test-file.txt',()=>{
     console.log('I/O FINISHED')
     console.log('-----------------')
     setTimeout(() => console.log('Timer 2 Finished'),0);
     setTimeout(() => console.log('Timer 3 Finished'),3000);
     setImmediate(() => console.log('IMMIDIATE 1 FINISHED'))
     process.nextTick(()=>console.log('PROCESS.NEXTTICK'))

     crypto.pbkdf2Sync("password", "moon", 100000, 1024, "sha512")
     console.log(Date.now() - start, "Password encrypted");

     crypto.pbkdf2Sync("password", "moon", 100000, 1024, "sha512")
     console.log(Date.now() - start, "Password encrypted");

    crypto.pbkdf2Sync("password", "moon", 100000, 1024, "sha512")
    console.log(Date.now() - start, "Password encrypted");

    crypto.pbkdf2Sync("password", "moon", 100000, 1024, "sha512")
    console.log(Date.now() - start, "Password encrypted");
   
 })
console.log('HELLOW TOP-LEVEL-CODE');