//First Question
// Test Case 1
let num = 9; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
//let num = 110; // "110"

if (num < 10) {
  console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`0${num}`);
} else {
  console.log(num);
}

//Second Question
let number = 9;
let str = "9";
let str2 = "20";

// Output
if (num == str) {
  console.log("{number} Is The Same Value As {str}");
} else if (num == str && typeof num !== typeof str) {
  console.log("{number} Is The Same Value As {str} But Not The Same Type");
} else if (num != str2 || typeof num !== typeof str2) {
  console.log("{number} Is Not The Same Value Or The Same Type As {str2}");
} else if (str != str2 && typeof str !== typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//Third Question
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 !== typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else if (num3 !== num1 && typeof num3 !== typeof num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

//Fourth Question
// Edit What You Want Here

let number1 = 11;
let number2 = 8;
let number3 = 11;
let number4 = 35;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (number1 > number2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (number1 > number2 && number1 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (number1 > number2 && number1 === number3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (number1 + number2 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (number1 + number3 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (number1 + number2 + number3 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (number4 - (number1 + number3) + number2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
