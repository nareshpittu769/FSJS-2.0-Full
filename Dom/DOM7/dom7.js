let likcss = document.head.getElementsByTagName("link")[0];
likcss.href = "./style (3).css";

let input = document.getElementsByClassName("main__form-input")[0];
input.removeAttribute("disabled");

let sub = document.getElementsByClassName("main__form-btn")[0];
sub.removeAttribute("disabled");

let form = document.getElementsByTagName("form")[0];
form.className = "myevent";
document.getElementsByClassName("myevent")[0].addEventListener("submit", function(event){
    event.preventDefault();
    let inp = document.getElementsByClassName("main__form-input")[0];
    let low = inp.value.toLowerCase();
    if(inp.value === null || inp.value === ""){
        alert("Please enter the input:")
    }else if(low ==="ineuron"){
        let a = document.getElementsByTagName("a");
        for (i=0; i<a.length;i++){
            a[i+1].remove();// i increases by +1 time, and also i++ increases the i value by +1 (remember it.)
        }
    }else{
        alert("course not available")
    }
});

