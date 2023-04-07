let a = 3;
for(let i = 1; i <=a ; i++){
    console.log("*".repeat(i));
}
console.log("----------------------");

let b = 3;
for(let i = 1; i <=b ; i++){
    console.log("*".repeat(b));
}
console.log("----------------------");

let c = 3;
for(let i = 1; i <=c ; i++){
    console.log(" ".repeat(c-i)+"*".repeat(i)+"*".repeat(i-1));
}