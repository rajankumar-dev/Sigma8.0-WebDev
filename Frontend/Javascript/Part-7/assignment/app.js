
//Qs -1
let arrayAverage = (arr) => {
    let total = 0;
    for(let item of arr){
        total = total +item;
    }
    return total/arr.length;
}

let arr = [6,2,3];
console.log(arrayAverage(arr));

//Qs -2
let isEven = (n) => {
    if (n%2 == 0){
        console.log("Even");
        
    }else{
        console.log("Odd");
        
    }
}
isEven(9);