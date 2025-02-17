// 執行
//      node 6_ifelse.js 
// Output:
//      非常好
//      非常非常好

const score = 90;

if (score >= 90) {
    console.log('非常好');
} else if(score <60) {
    console.log('不及格');
} else {
    console.log('中等');
}

const name = 'Archer';
const score2 = 90;

if (score2 >= 90 && name === 'Archer') {
    console.log('非常非常好');
} 