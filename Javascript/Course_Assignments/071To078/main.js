//First Question
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (prev, current) {
    return prev + current;
  });
console.log(word); // Elzero

console.log("-".repeat(30));
//Second Question

let myString = "EElllzzzzzzzeroo";

let word2 = myString
  .split("")
  .filter(function (value, index) {
    return value === myString[index + 1] ? "" : value;
  })
  .join("");

console.log(word2); // Elzero

console.log("-".repeat(30));
//Third Question

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let NewArray = [];

// Flating The Array
for (let i = 0; i < myArray.length; i++) {
  ElementLength = myArray[i].length;
  if (ElementLength > 1) {
    //This Is An Array
    for (let j = 0; j < ElementLength; j++) {
      NewArray.push(myArray[i][j]);
    }
  } else {
    NewArray.push(myArray[i]);
  }
}
let word3 = NewArray.reduce(function (prev, current) {
  return prev + current;
});
console.log(word3); // Elzero

console.log("-".repeat(30));
//Furth Question

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let result = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele)) ? ele : "";
  })
  .map(function (ele) {
    return -ele;
  });
console.log(result); // [-1, -10, 10, 20, -5, -3]

console.log("-".repeat(30));

//Fifth Question

let nums = [2, 12, 11, 5, 10, 1, 99];
let numsResult = nums.reduce(function (prev, current) {
  return current % 2 === 0 ? prev * current : prev + current;
}, 1);

console.log(numsResult); // 500
