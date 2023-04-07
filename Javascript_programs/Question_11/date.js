let a = new Date();
let b = new Date(1970,01,1);
console.log("The Year is: "+a.getFullYear());
console.log("The Month is: "+a.getMonth());
console.log("The Date is: "+a.getDate());
console.log("The Day is: "+a.getDay());
console.log("The Hour is: "+a.getHours());
console.log("The Minuties is: "+a.getMinutes());
console.log(Math.round((a - b)/1000));