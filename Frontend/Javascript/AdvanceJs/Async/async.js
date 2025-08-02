const stopBtn = document.getElementById('#stop');
const startBtn = document.querySelector('#start')

const sayHello = function(){
    console.log("Hello Async JS");
}

startBtn.addEventListener('click', function(){
    const greet = setTimeout(sayHello,2000);
},false);


// clearTimeout(greet);