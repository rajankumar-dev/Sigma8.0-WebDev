const inp = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function (){
//         let par = this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click", function(e){
    if(e.target.nodeName === 'BUTTON'){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
})
