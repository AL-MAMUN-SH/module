// console.log(arguments); 

// // data wrapping
// console.log(require('module').wrapper);

const C = require('./test-module-1')
const calc1 = new C();
console.log(calc1.add(5,2));
console.log('-----------');
console.log(calc1.divide(5,2));

// const calc2 = require('./test-module2')
const {add,divide,multiply} = require('./test-module2')
console.log(divide(8,5));
console.log('-------------------');

require('./test-module3')();
require('./test-module3')();
require('./test-module3')();