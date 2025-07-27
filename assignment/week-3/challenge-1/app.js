let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red", "Purple", "Green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },1000);
}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`;
    let random
    btnFlash();
}