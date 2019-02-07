var cvs = document.querySelector("#canvas");
var ctx = cvs.getContext("2d");

var bg = new Image();
var fg = new Image();
var bird = new Image();
var pipeTop = new Image();
var pipeDown = new Image();

var isJumping = false;
var bX = 10;
var bY = 100;
var score = 0;
var gap = 100;
var gravity = 1.02;
var forceDown = 1;

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

bg.src = "img/bg.png";
fg.src = "img/fg.png";
bird.src = "img/bird.png";
pipeTop.src = "img/pipeTop.png";
pipeDown.src = "img/pipeDown.png";

document.addEventListener("keydown", jump);
document.addEventListener("keyup", notJumping);
function jump() {
    if (!isJumping) {
        bY = bY - 50;
        if (bY < 0) bY = 0;
        isJumping = true;
        forceDown = 1;
    }
}
function notJumping() {
    isJumping = false;
}

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, bX, bY);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeDown, pipe[i].x, pipe[i].y+pipeTop.height+gap);
        pipe[i].x -= 1;

        if (pipe[i].x == 100) {
            pipe.push({
                x: cvs.width,
                y: 200 * Math.random() - 200
            })
        }
        if ((bX+bird.width-4 >= pipe[i].x && bX+bird.width-4 <= pipe[i].x+pipeTop.width) && (bY <= pipe[i].y + pipeTop.height || bY >= pipe[i].y + pipeTop.height + gap)) {
            location.reload();
        }
    }
    if (pipe[0].x < -80) {
        pipe.shift();
    }
    if (pipe[0].x + pipeTop.width == 10) {
        score += 1;
    }

    forceDown = forceDown * gravity;
    bY += forceDown;

    ctx.font = ("20px Verdana");
    ctx.fillText("Score: " + score, 10, 20);

    if (bY == cvs.height - bird.height - fg.height) {
        location.reload();
    }
    else {
        requestAnimationFrame(draw);
    }
}
draw();