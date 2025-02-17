// 執行
//      node 4_while.js
// Output:
//      a[0]: 1
//      a[1]: 2
//      a[2]: 3
//      a[3]: 4
//      a[4]: 5

const a = [1,2,3,4,5];
let index = 0;

while(index < a.length){
    console.log(`a[${index}]: ${a[index]}`);
    index++;
}