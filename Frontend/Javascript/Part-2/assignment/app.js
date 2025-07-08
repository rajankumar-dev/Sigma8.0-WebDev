// Question 1
let num = 80;

if(num % 10 == 0){
    console.log("good");
}else{
    console.log("bad");
    
}

//Question 2

// let name = prompt("enter your name");
// let age = prompt("enter your age");

// alert(`${name} is ${age} year old`)

//Question 3

let quarter = 1;

switch(quarter){
    case 1 : console.log("January, February, March");
            break;
    case 2 : console.log("Apr, may, June");
            break;
    case 3 : console.log("July, August, Sept");
            break;
    case 4 : console.log("OCt, Nov, Des");
            break;
    default : console.log("Not A Quarter");
}

//Question 4

let str = "Apple";

if((str[0] === "A") || (str[0] === "a")&& (str.length > 5)){
    console.log("Golden String");
}else{
    console.log("Not a Golden String");
}

//Question 5

let a = 5;
let b = 7;
let c = 7;

if (a > b){
    if(a > c){
        console.log(a, "is Greater");
    }else{
        console.log(b, "is Greater");
    }
}else{
    if(b > c){
        console.log(b, "is Greater");
    }else{
        console.log(c, "is greater");
    }
}
//Question 6

let x = 32;
let y = 88762;

if((x%10) == (y%10)){
    console.log("Number have the same last digit");
    
}