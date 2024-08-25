//Arrays Challenges

let zero = 0;

let counter = 3;

let My = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

//write code here

My.pop();
My.pop();

console.log(My.reverse()); //["Osama", "Elham", "Mazero", "Ahmed"]

let arr = My.slice(-counter, counter);
console.log(arr); // ["Elham", "Mazero"]

let elham = arr[zero].split("");
let E = elham[zero];
elham.shift();
let l = elham[zero];

My.pop();
let mazero = My.reverse()[zero].split("");
mazero.shift();
mazero.shift();
console.log(`${E}${l}${mazero.join("")}`); //Elzero

mazero[counter] = mazero[counter].toUpperCase();

mazero.shift();
mazero.shift();

console.log(`${mazero.join("")}`); //rO
