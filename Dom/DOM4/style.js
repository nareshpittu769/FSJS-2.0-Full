let barbi = document.getElementsByClassName("clash-card__image--barbarian")[0];
barbi.firstElementChild.src = "./barbarian.png";
let arrclass = ["clash-card__image--barbarian", "clash-card__image--archer","clash-card__image--giant", "clash-card__image--goblin", "clash-card__image--wizard"];
let arrimg = ["./barbarian.png", "./archer.png", "./giant.png", "./goblin.png", "./wizard.png"];
for (let i = 0;i<arrclass.length; i++){
    let img = document.getElementsByClassName(arrclass[i])[0];
    img.firstElementChild.src = arrimg[i];
}


let arrbgclass = ["clash-card__image--barbarian", "clash-card__image--archer","clash-card__image--giant", "clash-card__image--goblin", "clash-card__image--wizard"];
let arrbg = ['url("./barbarian-bg.jpg")', 'url("./archer-bg.jpg")', 'url("./giant-bg.jpg")', 'url("./goblin-bg.jpg")', 'url("./wizard-bg.jpg")'];
for (let i = 0;i<arrbgclass.length; i++){
    let img = document.getElementsByClassName(arrbgclass[i])[0];
    img.style.backgroundImage = arrbg[i];
}


let body = document.getElementsByClassName("slide-container")[0];
body.style.flexWrap = "nowrap";
body.style.marginLeft = "50px";
body.style.transform = 'scale(0.8,0.8)';

let bod = document.getElementsByTagName("body")[0];
bod.style.backgroundImage = "url('./coc-background.jpg')";

let arrcolorclass = ["clash-card__unit-stats--barbarian", "clash-card__unit-stats--archer ", "clash-card__unit-stats--giant", "clash-card__unit-stats--goblin","clash-card__unit-stats--wizard"];
let arrcolor = ["#ec9b3b", "#ee5487", "#f6901a","#82bb30","#4facff"];

for(let i =0; i<arrcolorclass.length;i++){
    let clas = document.getElementsByClassName(arrcolorclass[i])[0];
    clas.style.backgroundColor = arrcolor[i];
    clas.style.color = "#ffffff";

}

let divcolor = document.getElementsByClassName("no-border");
for(let x of divcolor){
    x.style.color = "#ffffff"
}