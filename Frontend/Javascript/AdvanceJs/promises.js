let onePromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        //console.log('Async task is complete');
        resolve();
    },1000);
});
onePromise.then(() => {
    //console.log('promises completed');
});

// Second Promise
let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userName:'rajan', email:'rajan@gmail.com'});
    },1000);
});
promiseTwo.then((user) => {
    console.log(user);
})

//callback Hell Problem
