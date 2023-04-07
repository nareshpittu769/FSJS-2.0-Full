const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let min, max;
function sort(arr){
    let x = arr.sort((a, b) => a - b);
    min = Math.min(...x); // using min and spread oparetor
    max = Math.max.apply(null, x); // using max method
    console.log(x, "\n", "Min-value:",min, " Max-Value:", max)
}

sort(ages);
console.log("---------------------------");


const median = ages => {
    const x = ages.sort((a, b) => a - b);
    if (x.length%2 != 0){
        let midindex = Math.floor(x.length/2);
        let median = x[midindex];
        return median;
    }else{
        let midindex = Math.floor(x.length/2);
        let median = (x[midindex] + x[midindex - 1])/2;
        return median;
    }
    
} 
console.log(" median is : "+ median(ages));
console.log("--------------------------------");

const avg = arr => {
    let len = arr.length;
    let total = 0;
    for (let i of arr){
        total+=i;
    }
    return (total/len);
}

console.log("The average is: " + avg (ages));
console.log("------------------------------");

const range = arr => {
    let x = arr.sort((a, b) => a - b);
    let minval = Math.min(...x);
    let maxval = Math.max(...x);
    let range = maxval - minval ;
    return range;
}

console.log("The range is: " + range(ages));
console.log("------------------------------");

console.log("The comapre values are: " + "with min:" , Math.abs(min-avg(ages)), "With max:" + Math.abs(max-avg(ages)));

