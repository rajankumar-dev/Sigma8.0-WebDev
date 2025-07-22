// Qs - 1
let arr1 = [1,2,3,4,5];
const square = arr1.map((num) => num*num);
console.log(square);

let sum = square.reduce((el,num) => el+num);
console.log(sum);

let avg = sum / arr1.length;
console.log(avg);

// Qs - 2
let arr2 = [1,2,3,4,5];
let newArr = arr2.map((num) => num + 5);
console.log(newArr);

// Qs - 3
let arr3 = ['name', 'surname','lastName','middleName'];
let newArr2 = arr3.map((num) => num.toUpperCase());
console.log(newArr2);

// Qs - 4
function doubleAndReturnArgs(arr, ...args){
    return [...arr,
        ...args.map((v)=>v*2),
    ];
};
console.log(doubleAndReturnArgs([1,2,3],3,4));

// Qs - 5
const mergeObjects = (obj1,obj2) => ({...obj1},{...obj2});
console.log(mergeObjects({a:1,b:2},{c:4,d:5}));