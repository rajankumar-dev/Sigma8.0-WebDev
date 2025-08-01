let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

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
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerText = `Game Over! Press any Key to Start`;
    }
    
}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randBtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function btnPress() {
    console.log(this);
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.level-1);
}


let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}