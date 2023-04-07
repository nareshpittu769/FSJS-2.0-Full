let arr1 = [], arr2 = [];
for(let i = 0 ; i<=100 ; i++){
    if (i%2 == 0){
        arr1.push(i);
    }else{
        arr2.push(i);
    }
}
console.log("The Even array is: "+arr1, "\nThe ODD array is: "+arr2)