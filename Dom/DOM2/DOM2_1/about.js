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
