let rn1 = Math.floor(Math.random() * 6) + 1;
let rn2 = Math.floor(Math.random() * 6) + 1;

let rImgSrc1 = "images/dice" + rn1 + ".png";
let rImgSrc2 = "images/dice" + rn2 + ".png";

let img1 = document.querySelectorAll("img")[0];
let img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", rImgSrc1);
img2.setAttribute("src", rImgSrc2);

if (rn1 > rn2)
  document.querySelector("h1").innerHTML = "<strong>Igrac 1 pobijedio</strong>";
else if (rn2 > rn1)
  document.querySelector("h1").innerHTML = "<strong>Igrac 2 pobijedio</strong>";
else
  document.querySelector("h1").innerHTML =
    "<strong>Izjednacen rezultat</strong>";

let btn = querySelector("btn");
