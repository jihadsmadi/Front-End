//First Question
function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    // Osama Mohamed => Osama M.
    let nameSequnces = zName.split(" ");
    return `${nameSequnces[0]} ${nameSequnces[1][0].toUpperCase()}.`;
  }
  function ageWithMessage() {
    // 38 Is My Age => Your Age Is 38
    let age = parseInt(zAge);
    return `Your Age Is ${age}`;
  }
  function countryTwoLetters() {
    // Egypt => You Live In EG
    return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log("-".repeat(30));

//Second Question
let itsMe = (_) => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("-".repeat(30));

//Third Questio
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }
let checker = (zName, status, salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama", "Available", 4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed", "Not Available")); // Iam Not Avaialble

console.log("-".repeat(30));

// //Fourth Question
function specialMix(...data) {
  // Your Code Here
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let num = parseInt(data[i]);

    if (!Number.isNaN(num)) {
      sum += num;
    }
  }

  if (sum === 0) return "All Is Strings";
  else return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
