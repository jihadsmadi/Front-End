//Frist Question
console.log("First Question");
let start = 10;
let end = 100;
let exclude = 40;

for (; start <= end; start += 10) {
  if (start === exclude) continue;

  console.log(start);
}

//Second Question
console.log("Second Question");
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (; start2 >= end2; start2--) {
  if (start2 < 10) console.log("0" + start2);
  else console.log(start2);

  if (start2 === stop2) break;
}

//Third Question
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (; start3 <= end3; start3++) {
  console.log(start3);
  console.log(`-- ${breaker3++}`);
  breaker3++;
  console.log(`-- ${breaker3--}`);
  breaker3--;
}

console.log("-".repeat(30));

//Fourth Question
let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
  if (index - jump < jump) break;

  console.log(index);
  index -= jump;
}

console.log("-".repeat(30));

//Fifth Question
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let zero = letter.length - letter.length;
let counter = zero;

for (let i = zero; i < friends.length; i++) {
  if (friends[i][zero] === letter.toUpperCase()) continue;

  console.log(`${++counter} => ${friends[i]}`);
}

console.log("-".repeat(30));
//Six Question
let start6 = 0;
let swappedName = "elZerO";

let result = "";

for (; start6 < swappedName.length; start6++) {
  if (swappedName.charCodeAt(start6) > 90) {
    result += swappedName[start6].toUpperCase();
  } else {
    result += swappedName[start6].toLowerCase();
  }
}
console.log(result);

//Siven Question
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

mix = mix.slice(++start7);
start7--;

for (; start7 < mix.length; start7++) {
  if (typeof mix[start7] !== "string") console.log(mix[start7]);
}
