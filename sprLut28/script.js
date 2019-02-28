const cvs = document.querySelector("#canvas");
const ctx = cvs.getContext("2d");

const bg = new Image();
const bird = new Image();
const pipe = new Image();

bg.src = "bg.png";
bird.src = "bird.png";
pipe.src = "pipeSouth.png";

let bX = 10;
let bY = 100;

let pX = 160;
let pY = 256;

let jump = -3;
let velocity = 0;
let gravity = 0.1;

document.addEventListener("keydown", function(e){
    if (e.key == "ArrowRight") bX += 10;
    else if (e.key == "ArrowLeft") bX -= 10;
    // else if (e.key == "ArrowUp") bY -= 10;
    // else if (e.key == "ArrowDown") bY += 10;
    if (e.key == "ArrowUp") velocity = jump;
});

function draw() {
    requestID = requestAnimationFrame(draw);

    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipe, pX, pY);
    ctx.drawImage(bird, bX, bY);

    if (((
        (bX > pX && bX < pX + pipe.width) ||
        (bX + bird.width > pX && bX + bird.width < pX + pipe.width)) &&
        (bY + bird.height > pY))
        ||
        (bX < 0 ||
        bX + bird.width > cvs.width ||
        bY < 0 ||
        bY + bird.height > cvs.height)) {
        cancelAnimationFrame(requestID);
    }

    velocity += gravity;
    bY += velocity;
}
draw();