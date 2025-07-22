let arr = [1,2,3,4];
arr.forEach(item => {
    // console.log(item);
});

let print = function(el){
    // console.log(el);
}
arr.forEach(print);

// Map function in javascript
//Return a new array and does not affect the orgnl array
 let num = [1,2,3,4,5];

//Practice Question 
let arr2 = [5,10,15,20,25,,30];

arr2.every((el)=>{
    if(el%10 === 0){
    console.log("all divisible");
}else{
        console.log("all not divisible");
    }
 });

