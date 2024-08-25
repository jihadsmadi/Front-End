//First Question
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let names = myFriends.reverse().slice(-num);
console.log(names.reverse()); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.reverse().pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//Second Question
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//Third Question
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne).concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Fourth Question
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

let result = words.reverse()[0][0].slice(website.length).toUpperCase();
console.log(result); // ZERO

//Fifth Question
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

//Six Question
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2);
allArrs.sort();
allArrs = allArrs.slice(-arr1.length).join("").toLowerCase();
console.log(allArrs); // fxy
