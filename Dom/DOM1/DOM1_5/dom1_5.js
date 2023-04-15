let ul = document.getElementsByTagName("ul")[0];
let li = ul.children[2];
li.firstElementChild.innerHTML = "Projects";
let search = document.getElementsByClassName("search-field")[0];
search.firstElementChild.placeholder = "Search";
let img = document.getElementsByClassName("hero-right-section")[0];
img.firstElementChild.src = "./avtar.png";
let button = document.getElementsByClassName("hero-right-section-btns")[0];
let btn = document.createElement("button");
btn.type = "button";
btn.innerHTML = "Support Me";
button.append(btn)