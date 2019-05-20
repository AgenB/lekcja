const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;

const PLAYER_WIDTH = 20;

const GAME_STATE = {
    lastTime: 0,
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    playerX: 0,
    playerY: 0,
    missiles: []
}

function clamp(v, min, max) {
    if (v < min) {return min}
    else if (v > max) {return max}
    else {return v}
}

function setPosition($element, x, y) {
    $element.style.transform = `translate(${x}px, ${y}px)`;
}



function createPlayer($container) {
    GAME_STATE.playerX = GAME_WIDTH/2;
    GAME_STATE.playerY = GAME_HEIGHT-50;

    const $player = document.createElement("img");
    $player.src = "img/spaceShips_004.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

function updatePlayer() {
    if (GAME_STATE.leftPressed) {GAME_STATE.playerX -= 5}
    else if (GAME_STATE.rightPressed) {GAME_STATE.playerX += 5}
    GAME_STATE.playerX = clamp(GAME_STATE.playerX, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);
    const $player = document.querySelector(".player");
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}



function createMissile($container, x, y) {
    const $missile = document.createElement("img");
    $missile.src = "img/spaceMissiles_040.png";
    $missile.className = "missile";
    $container.appendChild($missile);
    const missile = {
        x, y, $missile
    }
    GAME_STATE.missiles.push(missile);
    setPosition($missile, x, y);
}

function updateMissile() {
    const missiles = GAME_STATE.missiles;
    missiles.map(missile => {
        missile.y -= MISSILE_MAX_SPEED * dt;
        setPosition(missile.$missile, missile.x, missile.y);
    })
}


function update() {
    const currentTime = Date.now();
    const dt = (currentTime - GAME_STATE.lastTime) / 1000;
    updatePlayer();
    if (GAME_STATE.spacePressed) {createMissile($container, GAME_STATE.playerX, GAME_STATE.playerY)}
    updateMissile();
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function init() {
    const $container = document.querySelector(".game");
    createPlayer($container);
}

function onKeyDown(e) {
    if (e.keyCode === KEY_CODE_LEFT) {
        GAME_STATE.leftPressed = true;
    }
    else if (e.keyCode === KEY_CODE_RIGHT) {
        GAME_STATE.rightPressed = true;
    }
    else if (e.keyCode === KEY_CODE_SPACE) {
        GAME_STATE.spacePressed = true;
    }
}

function onKeyUp(e) {
    if (e.keyCode === KEY_CODE_LEFT) {
        GAME_STATE.leftPressed = false;
    }
    else if (e.keyCode === KEY_CODE_RIGHT) {
        GAME_STATE.rightPressed = false;
    }
    else if (e.keyCode === KEY_CODE_SPACE) {
        GAME_STATE.spacePressed = false;
    }
}

init();

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);