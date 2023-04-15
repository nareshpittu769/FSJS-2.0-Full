let head = document.getElementsByTagName("head")[0];
let link = document.createElement("link");
link.rel= "stylesheet";
link.href = "./style.css";
head.appendChild(link);
let ul = document.getElementsByTagName("ul")[0];
let li = ul.children[2];
li.firstElementChild.innerHTML = "Projects";
let addli = document.createElement("li");
addli.innerHTML = '<a href="#l">Hire Me</a>';
ul.append(addli);
let avatar = document.getElementsByClassName("hero-right-section")[0];
avatar.firstElementChild.src = "./avtar.png";
let a = document.getElementById("myDIV");
a.remove();
let foo = document.getElementsByTagName("footer")[0];
let p = foo.firstElementChild;
p.style.marginRight = "700px";



