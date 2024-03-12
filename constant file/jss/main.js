//DOM - Document object model

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2")
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i ++) {
    evenDivs[i].style.backgroundColor = "darkblue";
}


const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hellow World!";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>HEllo!</h1> <p> this should align right. </p>`;

console.log(navbar);

navbar.style.justifyContent = "space -evently";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.childNodes);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection ="row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while(view2.lastChild) {
    view2.lastChild.remove();
}
