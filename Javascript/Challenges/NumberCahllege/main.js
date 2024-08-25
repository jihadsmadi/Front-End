//Number Challege

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And REturn Integer
console.log(parseInt(Math.min(a,b,c,d)));

// Use Variable a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d));//10000

//Get Integer "2" From d variable with 4 methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));

// use variables b + d to get this values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d))); // 67 => Number