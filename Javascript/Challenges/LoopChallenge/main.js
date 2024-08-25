// Loop Challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amged",
  "Samah",
  "Ammer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let adminsNum = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  adminsNum++;
}

document.write(`<div>We Have ${adminsNum} Admins</div>`);
document.write(`<hr>`);

for (let j = 0; j < adminsNum; j++) {
  document.write(`<div>`);
  document.write(`The Admin For Team ${j + 1} Is ${myAdmins[j]}`);
  document.write(`<h3>Team Members:</h3>`);
  let counter = 1;

  for (let i = 0; i < myEmployees.length; i++) {
    if (
      myEmployees[i].charAt(0).toUpperCase() ===
      myAdmins[j].charAt(0).toUpperCase()
    ) {
      document.write(`<p>- ${counter} ${myEmployees[i]}</p>`);
      counter++;
    }
  }

  document.write(`</div>`);
  document.write(`<hr>`);
}
