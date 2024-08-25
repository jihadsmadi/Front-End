/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let zero = myString.length - myString.length;
let one = +true;

let solution = myString
  .split(",")
  .filter(function (ele) {
    return Number.isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  .reduce(function (prev, current) {
    if (current.length > 1) return prev + current.substring(zero, one);
    else return prev + current;
  }, "");

console.log(solution.substring(zero, solution.length - one)); // Elzero Web School
