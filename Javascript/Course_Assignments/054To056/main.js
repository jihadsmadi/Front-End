let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (
    friends[index][friends.length - friends.length] !== "A" &&
    typeof friends[index] === "string"
  ) {
    console.log(`${++counter} => ${friends[index]}`);
  }
  index++;
}
