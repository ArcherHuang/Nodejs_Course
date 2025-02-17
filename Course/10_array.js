// 執行
//      node 10_array.js 
// Output:
//      a: 10
// 
//      b: 20
// 
//      rest: 30,40,50
// 
//      arr: 3,2,1,4

let a, b, rest, c, d;
[a, b] = [10, 20];

console.log(`a: ${a}\n`);

console.log(`b: ${b}\n`);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(`rest: ${rest}\n`);

// 索引位置的值交換
let arr = [1, 2, 3, 4];
[arr[0], arr[2]] = [arr[2], arr[0]]; // 交換索引 0 和索引 2 的值
console.log(`arr: ${arr}`);