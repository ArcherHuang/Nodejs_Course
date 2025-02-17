// 執行
//      node 1_variable.js
// Output:
//      a: 8
//      b: 4
//      c: 10
//      d: Hello

//      c: 20
//      d: Hello World

const a = 8;
const b = '4';
let c = 10;
let d = 'Hello';

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}\n`);

// a += 10; // Error 宣告常數後不可再更改
// b += '10'; // Error 宣告常數後不可再更改
c += 10;
d += ' World';
// console.log(`a: ${a}`);
// console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);