//Frist Question
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100000
console.log(100_000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(100 * 100e1); // 100000
console.log(1e4 + 90000); // 100000
console.log((100 / 10 )** 5); // 100000
console.log(10000000/ 100); // 100000

//Second Question
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//Third Question
console.log(Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER + 16); // 16

//Fourth Question
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//Fifth Question
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//Six Question
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

//Seven Question
console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4