const pauseBtn = document.querySelector("#pauseGame");
const playBtn = document.querySelector("#playGame");
const cvs = document.querySelector("#canvas");
const ctx = cvs.getContext("2d");

let bg = new Image();
let fg = new Image();
let bird = new Image();
let pipeTop = new Image();
let pipeDown = new Image();

let isJumping = false;
let bX = 10;
let bY = 100;
let score = 0;
let gap = 100;
let max = 350;
let min = 200;
let gravity = 0.1;
let velocity = 0;
let jump = -3;
let pause = false;

const pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 250
}

bg.src = "img/bg.png";
fg.src = "img/fg.png";
bird.src = "img/bird.png";
pipeTop.src = "img/pipeTop.png";
pipeDown.src = "img/pipeDown.png";

document.addEventListener("keydown", jumpUp);
document.addEventListener("keyup", notJumping);
function jumpUp() {
    if (!isJumping) {
        velocity = jump;
        isJumping = true;
    }
}
function notJumping() {
    isJumping = false;
}

function draw() {
    requestID = requestAnimationFrame(draw);

    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird, bX, bY);

    for (var i = 0; i < pipe.length; i++) {
		ctx.drawImage(pipeDown, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y-pipeTop.height-gap);
		pipe[i].x--;

        if (pipe[i].x == 100) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * (max - min) + min)
            })
        }
        if (
			(pipe[i].x > -pipeDown.width) &&
			(
				( (bX < pipe[i].x) && (bX + bird.width >pipe[i].x) ) ||
				( (bX > pipe[i].x) && (bX  + bird.width  < pipe[i].x + pipeDown.width) ) ||
				( (bX < pipe[i].x + pipeDown.width) && (bX + bird.width> pipe[i].x + pipeDown.width) )
			) &&
			( (bY + bird.height >= pipe[i].y) || (bY <= pipe[i].y - gap))
		) {
			cancelAnimationFrame(requestID);
		}
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    if (pipe[0].x < -80) {
        pipe.shift();
    }
    if (pipe[0].x + pipeTop.width == 10) {
        score += 1;
    }

    ctx.font = ("20px Verdana");
    ctx.fillText("Score: " + score, 10, 20);
	velocity += gravity;

	if (bY > bg.height - bird.height || bY < 0) {
		velocity = 0;
		cancelAnimationFrame(requestID);
	}
	bY = bY + velocity;
}
pauseBtn.addEventListener("click", function() {
	// animacja stop;
	cancelAnimationFrame(requestID);
	pause = true;
});
playBtn.addEventListener("click", function() {
	//animacja start;
	if ( pause === true ) {
		requestAnimationFrame(draw);
	}
	this.blur();
	pause = false;
});
draw();