//First Question
function sayHello(theName, theGender) {
  console.log(
    `Hello ${
      theGender === undefined ? "" : `${theGender === "Male" ? "Mr " : "Miss "}`
    }${theName}`
  );
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("-".repeat(30));

//Second Question
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }

  switch (operation) {
    case "subtract":
      return console.log(firstNum - secondNum);
    case "multiply":
      return console.log(firstNum * secondNum);
    default:
      return console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("-".repeat(30));
//Third Question
function ageInTime(theAge) {
  if (theAge <= 10 || theAge > 100) {
    console.log("Age Out Of Range");
    return;
  }

  let Months = (theAge * 366) / 31;
  let Weeks = Months * 4;
  let Days = theAge * 366;
  let hours = Days * 24;
  let Minuts = hours * 60;
  let seconds = Minuts * 60;

  console.log(Months.toFixed(0) + " Months");
  console.log(Weeks.toFixed(0) + " weeks");
  console.log(Days + " days");
  console.log(hours + " hours");
  console.log(Minuts + " minuts");
  console.log(seconds + " seconds");
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("-".repeat(30));
//Fourth Question
function checkStatus(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

  console.log(
    `Hello ${name}, Your Age Is ${age}, Your Are ${
      status ? "" : "Not "
    }Avaliable For Hire.`
  );
}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("-".repeat(30));
//Fifth Question
function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write("<select>");
  for (; startYear <= endYear; startYear++) {
    document.write(`<option value = ${startYear}>${startYear}</option>`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);

console.log("-".repeat(30));

//Six Question
function multiply(...elements) {
  let result = 1;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      result *= parseInt(elements[i]);
    }
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
