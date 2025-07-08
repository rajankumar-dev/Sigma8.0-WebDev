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
cars.unshift("ferrary"); // unshift
cars.shift("ferrary"); // shift

console.log(cars);
