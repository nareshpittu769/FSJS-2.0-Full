let main = document.getElementsByTagName("form")[1];
let userName = document.getElementsByClassName("userName")[0];
let userEmail = document.getElementsByClassName("userEmail")[0];
let userMessage = document.getElementsByClassName("userMessage")[0];
let enterName = document.getElementsByClassName("enterName")[0];
let enterMail = document.getElementsByClassName("enterMail")[0];
let enterMessage = document.getElementsByClassName("enterMessage")[0];
main.addEventListener('submit', (event)=>{
    event.preventDefault();
    enterName.value = userName.value;
    enterMail.value =  userEmail.value;
    enterMessage.value = userMessage.value;
})