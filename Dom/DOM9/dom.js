let link = document.head.getElementsByTagName("link")[0];
link.href = "./favicon-32x32.png";

let img = document.body.getElementsByClassName("img")[0];
img.firstElementChild.src = "./image-product-desktop.jpg"

let title = document.getElementsByClassName("title")[1];
title.style.color = "#ff0000";

let btn = document.body.getElementsByClassName("add-to-cart")[0];
btn.firstElementChild.src = "./icon-cart.svg";
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#ff0000";
});
    
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#3c8067";
    btn.style.color = "#ffffff"
})

