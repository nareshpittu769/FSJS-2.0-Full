let divclass = document.getElementsByClassName("accordian-wrapper")[0];
let div = document.createElement("div");
div.className = "accordian";
let h3 = document.createElement("h3");
h3.innerHTML = "Skills";
let p = document.createElement("p");
p.innerHTML = "I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the Github.";
div.append(h3);
div.append(p);
divclass.append(div);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let ul = document.getElementsByTagName("ul")[0];
let li = ul.children[2];
li.firstElementChild.innerHTML = "Projects";

accordian.forEach((ele)=>{
  ele.style.backgroundColor = "#DADAF8";
})

