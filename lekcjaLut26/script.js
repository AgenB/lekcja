const cvs = document.querySelector("#canvas");
const ctx = cvs.getContext("2d");

let bg = new Image();

bg.src = "img/background.png";

function draw() {
    requestID = requestAnimationFrame(draw);

    ctx.drawImage(bg, 0, 0);
    ctx.fillStyle = "#404040";
    ctx.fillRect(20, 160, 20, 80);
    ctx.fillRect(600, 160, 20, 80);
}
draw()