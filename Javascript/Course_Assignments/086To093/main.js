// Important Note !!!
// You Need to Discomment the code that you want to run

//First Question
let elements = [];
elements[0] = document.getElementById("elzero");
elements[1] = document.getElementsByClassName("element")[0];
elements[2] = document.getElementsByName("js")[0];
elements[3] = document.getElementsByTagName("div")[0];
elements[4] = document.querySelector("#elzero");
elements[5] = document.querySelector(".element");
elements[6] = document.querySelector("[name = js]");
elements[7] = document.querySelector("div");
elements[8] = document.querySelectorAll("#elzero")[0];
elements[9] = document.querySelectorAll(".element")[0];
elements[10] = document.querySelectorAll("[name = js]")[0];
elements[11] = document.querySelectorAll("div")[0];
elements[12] = document.body.firstElementChild;
elements[13] = document.body.lastElementChild;
elements[14] = document.body.getElementsByClassName("element")[0];

// for (let i = 0; i < 15; i++) {
//   console.log(elements[i]);
// }

//Second Question
// let imagePath = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";

// let Elements = document.getElementsByTagName("img");

// for (let i = 0; i < Elements.length; i++) {
//   Elements[i].setAttribute("src",imagePath);
//   Elements[i].setAttribute("alt", "ElzeroLogo.png");
// }

//Third Question
// let myInput = document.getElementsByName("dollar")[0];
// let myResult = document.getElementsByClassName("result")[0];

// myInput.onchange = function () {
//   let dollarPerEgyption = 15.6;
//   myResult.innerHTML = `{${myInput.value}} USD Dollar = {${(
//     myInput.value * dollarPerEgyption
//   ).toFixed(2)}} Egyptian Pound`;
// };

//Fourth Question
// let elementOne = document.querySelector(".one");
// let elementTwo = document.querySelector(".two");

// let one = elementTwo.getAttribute("title");
// let two = elementOne.getAttribute("title");

// elementOne.setAttribute("title", one);
// elementTwo.setAttribute("title", two);

// let oneText = elementTwo.innerHTML;
// let twoText = elementOne.innerHTML;

// elementOne.innerHTML = oneText;
// elementTwo.innerHTML =
//   twoText + " " + document.getElementsByTagName("div").length;

//Fifth Question
// let images = document.getElementsByTagName("img");
// console.log(images.length);
// for (let i = 0; i < images.length; i++) {
//   if (images[i].getAttribute("alt") !== null) {
//     images[i].setAttribute("alt", "Old");
//   } else {
//     images[i].setAttribute("alt", "Elzero New");
//   }
// }

//Six Question
let numElements = document.getElementsByName("elements")[0];
let textInput = document.getElementsByName("texts")[0];
let elementType = document.getElementsByName("type")[0];
let btnCreate = document.getElementsByName("create")[0];
let divResults = document.getElementsByClassName("results")[0];

btnCreate.onclick = function (e) {
  divResults.innerHTML = "";
  for (let j = 0; j < numElements.value; j++) {
    let newElement = document.createElement(elementType.value);
    newElement.className = "box";
    newElement.setAttribute("title", "Element");
    newElement.innerHTML = textInput.value;

    newElement.setAttribute("id", `id-${j + 1}`);
    divResults.appendChild(newElement);
  }
  e.preventDefault();
};
