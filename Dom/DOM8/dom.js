let deskimg = document.querySelector(".desk-image");
deskimg.src = "./image-web-3-desktop.jpg";
deskimg.style.width = "97%";
let brand = document.getElementsByClassName("navbar-brand")[0];
brand.style.fontSize = "50px"
brand.style.fontWeight = "500"
let aside = document.querySelector(".new");
aside.style.backgroundColor = "black";
aside.style.width = "29%";
aside.style.color = "white";
aside.style.padding = "20px";
aside.style.lineHeight = "22px";
aside.style.overflowY = "scroll";
aside.style.height = "455px";
let hrle = document.createElement("hr");
hrle.classList.add("hr-line");
aside.append(hrle);
let h2 = document.createElement("h2");
h2.innerHTML  = "The custom heading";
let p = document.createElement("p");
p.innerHTML = "The custom paragraph";
aside.append(h2,p)
let text = aside.firstElementChild;
text.style.color = "#e9ab53";
text.style.marginBottom = "10px"
let asidef = document.getElementsByClassName("new-head");
for (i= 0 ; i<asidef.length ; i ++){
    asidef[i].style.fontSize = "26px";
}
let hr = document.getElementsByClassName("hr-line");
for (i= 0 ; i<hr.length ; i ++){
    hr[i].style.margin = "20px 0px";
}
let body = document.body
body.style.width = "90%";
body.style.margin = "auto";
let nav = document.getElementsByTagName("nav")[0]
nav.style.width = "96%";

let imgarr = ["./image-retro-pcs.jpg","./image-top-laptops.jpg","./image-gaming-growth.jpg"];
let lastrow = document.getElementsByClassName("last-row-img");
for (i= 0 ; i<lastrow.length ; i ++){
    lastrow[i].src = imgarr[i];
    lastrow[i].style.marginTop = "10px"
}

let readme = document.querySelector(".read-btn");
readme.style.marginBottom = "10px";

let btn = document.getElementsByClassName("navbar-toggler")[0];
btn.addEventListener("click",btnclick);
function btnclick (){
    document.getElementById("navbarTogglerDemo01").classList.toggle("collapse")
}