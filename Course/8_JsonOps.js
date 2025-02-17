// 執行
//      node 8_JsonOps.js 
// Output:
//      key: status
//      status: "OK"
// 
//      key: config
//      config: {"A0":"Hello","B1":"World"}
// 
//      key: datas
//      datas: [1,2,3]

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