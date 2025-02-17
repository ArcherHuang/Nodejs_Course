// 執行
//      node 5_function.js 
// Output:
//      Hi
//      Hello World, Archer
//      Hello World, Archer

function hi() {
  console.log('Hi');
}

function hello(aaa, bbb) {
    console.log(`Hello ${aaa}, ${bbb}`);
}

function helloJson({
    aaa,
    bbb
}) {
    console.log(`Hello ${aaa}, ${bbb}`);
}

hi();
hello('World', 'Archer');
helloJson({
    aaa: 'World',
    bbb: 'Archer',
});