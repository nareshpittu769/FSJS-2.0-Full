let a = "";
for(let i = 2; i<=100 ; i++){
    for(let j = 2; j < i; j++ ){
        if(i%j == 0){
           break; 
        }
        else{
            a += "  "+(i);
            break;
        }
    }
}
console.log("The prime numbers are: "+"2",a); 