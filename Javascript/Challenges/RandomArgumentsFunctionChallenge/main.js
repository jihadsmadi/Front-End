function showDetails(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

  console.log(
    `Hello ${name}, Your Age Is ${age}, Your Are ${
      status ? "" : "Not "
    }Avaliable For Hire.`
  );
}

showDetails("Jihad", 22, false);
showDetails(22, "Jihad", true);
showDetails(true, 22, "Jihad");
showDetails("Jihad", 22, true);
showDetails(false, 22, "Jihad");
showDetails(false, "Jihad", 22);
