//Qs - 1
//First create an input element and Button
const input = document.createElement('input');
const button = document.createElement('button');

//Then set its Attributes
input.setAttribute('type', 'text');
input.setAttribute("placeholder", "Enter text here");
button.textContent = 'Click Me!'

//Track the area that you want to add this button and input
let container = document.querySelector('.input-container');

//Append input to the div container
container.appendChild(input);
container.appendChild(button);

//Qs - 2
input.setAttribute('placeholder', 'username');
button.setAttribute('id', 'btn');

//Qs - 3
let btn = document.querySelector('#btn');
btn.classList.add("btnStyle");

//Qs - 4
const h1 = document.createElement('h1');
h1.innerHTML = '<u>Dom Practice</u>';
document.querySelector('.input-container').append(h1);

//Qs - 5
const p = document.createElement("p");
p.innerHTML = 'Apna College <b> Delta </b> Practice';
container.appendChild(p);
