// String Methods  -->  String are always Immutable

// trim Methods  -->  Return a new String, Do not Modify the original String
let str = '    hello  ';
console.log(str.trim());

// toUpperCase and toLowerCase Methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// String Methods with Arguments
// 1. indexOf()
console.log(str.indexOf("e"));

//vMethod Chaining
console.log(str.trim().toUpperCase());

// Slice Methods --> Always take 2 args first starting index and (Last index + 1) bcz do not consider the last digit.
let msg = "ILoveCoding"
console.log(msg.slice(4, 11));
console.log(msg.slice(4, msg.length));
console.log(msg.slice(-4)); //11-4 = 7, so start with index 7

// Replace Methods
console.log(msg.replace("Love", "do"));

// Repeat Methods
console.log(msg.repeat(2));

// Arrays
let students = ["A","B","C"]; //String Array
console.log(students);

let nums = [1,2,3,4]; //Nums Array
console.log(nums[3]);

let info = ["name", 7.2, 5]; // Mixed Array

let empty = []; // Empty Array

console.log(info[0][3]); // Array Chaining

// Array also Mutable
mutableArr = info[1]="rajan";
console.log(mutableArr);
console.log(info);

//Array Methods
let cars = ['audi', 'maruti', 'suzuki'];
cars.push('toyota'); //Push Methods
cars.pop(); //pop Methods
cars.unshift("ferrary"); // unshift Methods
cars.shift("ferrary"); // shift Methods

console.log(cars);

// indexOf Method
let ind = cars.indexOf('suzuki');
console.log(ind);

// Concat Method
let allArr = cars.concat(info);// return a new array
console.log(allArr);

let reverseArr = allArr.reverse();// also affect original array
console.log(reverseArr);

// Slice Methods --> Always take 2 args first starting index and (Last index + 1) bcz do not consider the last digit.
let colors =['red','yellow', 'blue', 'orenge', 'black'];
colors.slice(); //Also return a copy of complete Array
colors.slice(2); //Start index 2 and goes to last elements
colors.slice(2,3);// return only 2 index value
console.log(colors.slice(-2)); //4-2 = 2, so start with index 2

// splice Method --> Affect Original Array
// splice(Start, deleteCount, item0...intemN)
console.log(colors.splice(1,1,'voilet'));
console.log(colors);

// sort methods
let sorted = colors.sort();

//Practice Question
let start =  ['jan', 'jul', 'mar', 'aug'];
let final = start.splice(0,2,"july","june");
console.log(start);

// Array Reference
let arr = ['a','b','c'];
let arrCopy = arr;
arr == arrCopy;
arr === arrCopy;
arr.push('d');//also add to arrCopy Array
console.log(arr);
console.log(arrCopy);

//Constant Array
const arr1 = [1,2,3,4];
arr1.push(5);//we can also do all operation on const array but we can not create a new array in same const array

//Nested Array(Multi-Dimentional Array)
let multiArr = [[1,2],[3,4],[5,6]];






