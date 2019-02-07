var cvs = document.querySelector("#canvas");
var ctx = cvs.getContext("2d");

var bg = new Image();
var fg = new Image();
var bird = new Image();
var pipeTop = new Image();
var pipeSouth = new Image();

var isJumping = false;
var bX = 10;
var bY = 100;

bg.src = "img/bg.png";
fg.src = "img/fg.png";
bird.src = "img/bird.png";
pipeTop.src = "img/pipeTop.png";
pipeSouth.src = "img/pipeSouth.png";

document.addEventListener("keydown", jump);
document.addEventListener("keyup", notJumping);
function jump() {
    if (!isJumping) {
        bY = bY - 50;
        isJumping = true;
    }
}
function notJumping() {
    isJumping = false;
}

function draw() {
    console.log("object");
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bX, bY);
    ctx.drawImage(pipeTop, 100, 0);

    bY = bY + 1;


    if (bY == cvs.height - bird.height - fg.height) {
        console.log("koniec");
    }
    else {
        requestAnimationFrame(draw);
    }
}
draw();