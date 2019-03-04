const cvs1 = document.querySelector("#first");
const cvs2 = document.querySelector("#second");
const ctx1 = cvs1.getContext("2d");
const ctx2 = cvs2.getContext("2d");

let bird = new Image();
let pipe = new Image();
let bg = new Image();

bird.src = "bird.png";
pipe.src = "pipeSouth.png";
bg.src = "bg.png";

let bX = 50;
let bY = 250;

let pX = 160;
let pY = 300;

let boxX = 100;
let boxY = 50;

let boxAX = 1;
let boxAY = 2;

document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") bX += 10;
    else if (e.key == "ArrowLeft") bX -= 10;
    else if (e.key == "ArrowDown") bY += 10;
    else if (e.key == "ArrowUp") bY -= 10;
});

function draw1() {
    requestID1 = requestAnimationFrame(draw1);

    ctx1.drawImage(bg, 0, 0);
    ctx1.drawImage(pipe, pX, pY);
    ctx1.drawImage(bird, bX, bY);

    let bX2 = bX + bird.width;
    let bY2 = bY + bird.height;

    let pX2 = pX + pipe.width;

    if ((((bX > pX && bX < pX2) || (bX2 > pX && bX2 < pX2)) && bY2 > pY) ||
    (bX < 0 || bX2 > cvs1.width || bY < 0 || bY2 > cvs1.height)) {
        cancelAnimationFrame(requestID1);
    }
}
draw1();

function draw2() {
    requestID2 = requestAnimationFrame(draw2);

    ctx2.fillStyle = "#f0f0f0";
    ctx2.fillRect(0, 0, 256, 256);
    ctx2.fillStyle = "#0f0f0f";
    ctx2.fillRect(boxX, boxY, 20, 20);

    if (boxX + 20 > 256) boxAX = -boxAX;
    if (boxY + 20 > 256) boxAY = -boxAY;
    if (boxX < 0) boxAX = -boxAX;
    if (boxY < 0) boxAY = -boxAY;

    boxX += boxAX;
    boxY += boxAY;
}
draw2();