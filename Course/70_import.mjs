// 執行
//      node 70_import.mjs 
// Output:
//      checkResult: {"result":true,"message":"Hello World, Archer"}

import rule from './71_rule.mjs';

const checkResult = rule.validator({
    aaa: 'World',
    bbb: 'Archer',
});

console.log(`checkResult: ${JSON.stringify(checkResult)}`);