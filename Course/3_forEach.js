// 執行
//      node 3_forEach.js
// Output:
//      a[0]: 1
//      a[1]: 2
//      a[2]: 3
//      a[3]: 4
//      a[4]: 5

const a = [1,2,3,4,5];

a.forEach((element, index) => {
    console.log(`a[${index}]: ${element}`);
});