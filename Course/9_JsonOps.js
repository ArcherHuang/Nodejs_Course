// 執行
//      node 9_JsonOps.js 
// Output:
//      key: status
//      status: "OK"
// 
//      key: config
//      config: {"A0":"Hello","B1":"World"}
// 
//      key: datas
//      datas: [1,2,3]
// 
//      Add aaa: {"status":"OK","config":{"A0":"Hello","B1":"World"},"datas":[1,2,3],"zzz":"123"}
// 
//      Delete aaa: {"status":"OK","config":{"A0":"Hello","B1":"World"},"datas":[1,2,3]}
// 
//      Merge ccc: {"status":"OK","config":{"A0":"Hello","B1":"World"},"datas":[1,2,3],"qqq":"168"}

const aaa = {
    status: 'OK',
    config: {
        A0: 'Hello',
        B1: 'World',
    },
    datas: [
        1,
        2,
        3,
    ]
}

Object.keys(aaa).forEach((key) => {
    console.log(`key: ${key}`);
    console.log(`${key}: ${JSON.stringify(aaa[key])}\n`);
});

// 新增 zzz: '123' 到 aaa JSON
aaa['zzz'] = '123';
console.log(`Add aaa: ${JSON.stringify(aaa)}\n`);

// 刪除 zzz 從 aaa JSON
delete aaa['zzz'];
console.log(`Delete aaa: ${JSON.stringify(aaa)}\n`);

// 將 aaa JSON 與 bbb JSON 中的資料放到 ccc JSON
const bbb = {
    qqq: '168',
}
let ccc = {};

ccc = {
    ...aaa,
    ...bbb,
}
console.log(`Merge ccc: ${JSON.stringify(ccc)}`);