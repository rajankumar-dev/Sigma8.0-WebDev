const body = document.querySelector("body");

body.addEventListener("mousemove", (e)=>{
    console.dir(e)
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.top = yPos + "px";
    spanEl.style.left = xPos + "px";
    body.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000)
})