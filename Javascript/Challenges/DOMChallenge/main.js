let header = document.createElement("header");
header.className = "header";

// header Elements
let logo = document.createElement("p");
logo.className = "logo";
logo.textContent = "Elzero";

let linksList = document.createElement("ul");

//    Create All Links
let home = document.createElement("a");
home.className = "home";
home.textContent = "home";
let about = document.createElement("a");
about.className = "about";
about.textContent = "about";
let service = document.createElement("a");
service.className = "service";
service.textContent = "service";
let contact = document.createElement("a");
contact.className = "contact";
contact.textContent = "contact";

let links = [home, about, service, contact];
for (let i = 0; i < links.length; i++) {
  linksList.appendChild(links[i]);
}

header.appendChild(logo);
header.appendChild(linksList);
//End Header Elements
//Start Products Elements
let container = document.createElement("div");
container.className = "container";
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.id = `product-${i + 1}`;
  product.className = "product";
  product.textContent = "Product";
  let span = document.createElement("span");
  span.textContent = i + 1;
  span.style.cssText = "font-size: 24px;font-weight: bold;color:black";
  product.prepend(span);
  container.appendChild(product);
}
//End Puoducts Elements
//Start Footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.innerHTML = "Copyright 2024";

document.body.appendChild(header);
document.body.appendChild(container);
document.body.appendChild(footer);
//CSS Coding
document.body.style.cssText =
  "padding : 0;margin : 0;background-color : hsl(0deg, 0%, 92.55%)";

// --header styling
header.style.cssText =
  "background-color:white;display:flex;justify-content:space-between;align-items:center;padding:0 20px;";
logo.style.cssText =
  "margin : 0; color :rgb(35, 169, 110);font-size : 22px;font-weight : bold";
linksList.style.cssText =
  "width: 200px;display: flex;justify-content: space-between;text-transform: capitalize;";
for (let i = 0; i < links.length; i++) links[i].style.cursor = "pointer";

// --products Styling
container.style.cssText =
  "display: grid;grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));gap: 15px;padding: 15px;";
for (let i = 0; i < container.children.length; i++) {
  container.children[i].style.cssText =
    "background-color: white;height: 75px;border-radius: 2px;border: 1px solid #eee;display: flex;justify-content: center;align-items: center;flex-direction: column;color: #bebcbc;font-size: 11px;";
}

// --Footer Styling
footer.style.cssText =
  "background-color : rgb(35, 169, 110);height : 63px;display: flex;justify-content: center;align-items: center;color: white;";
