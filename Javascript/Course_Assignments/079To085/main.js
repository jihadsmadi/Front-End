//First Question
// Create Your Object Here

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: () =>
    `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`,
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log("-".repeat(30));
//Second Question

// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Methode One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = Object.create({ property: "Methode Two" });
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = new Object({ property: "Methode Three" });
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = {};
Object.assign(objMethodFour, { property: "Methode Four" });
console.log(objMethodFour.property); // "Method Four"

console.log("-".repeat(30));
//Three Question

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

console.log("-".repeat(30));

//Fourth Question
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);

for (let i = 0; i < objectLength; i++) {
  let objectName = Object.keys(myFavGames)[i];
  console.log(`The Game Name Is ${objectName}`);
  console.log(`The Publisher Is ${myFavGames[objectName].publisher}`);
  console.log(`The Price Is ${myFavGames[objectName].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[objectName].bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[objectName].bestThree.one}`);
    console.log(`Second =>  ${myFavGames[objectName].bestThree.two}`);
    console.log(`Third =>  ${myFavGames[objectName].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
