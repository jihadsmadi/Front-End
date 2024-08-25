let names = (...arr) => `String [${arr.join("],[")}] => Done !`;

console.log(names("Osama", "Mohammad", "Ali", "Ibrahim"));

//=======================================================

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[+false];

console.log(calc(10, myNumbers[0], myNumbers[1], myNumbers[2]));
