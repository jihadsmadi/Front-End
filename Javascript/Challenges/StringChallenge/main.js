let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(a.length - 4).toUpperCase().repeat(8));//HHHHHHHH

// Return Array
console.log(a.split(" ",1)); //[Elzero]

//Use Only "subst" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11)}`);//Elzero School

//Solution Must Be Dynamic And String May Change
console.log(`${a[0].toLowerCase()}${a.slice(1,a.length - 2).toUpperCase()}${a[a.length - 1].toLowerCase()}`);

