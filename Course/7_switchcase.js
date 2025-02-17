// 執行
//      node 7_switchcase.js 
// Output:
//      繁中

const language = 'zh-TW';

switch(language){
    case "en-US":
        console.log('英饗');
        break;
    case "zh-CN": 
        console.log('簡中');
        break;
    case "zh-TW":
        console.log('繁中');
        break;
    default:
        console.log('不知道是什麼語言');
        break;
}