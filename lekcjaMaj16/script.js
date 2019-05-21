import {
    createPlayer,
    updatePlayer
} from "./player.js"

import {
    GAME_STATE,
    $container,
    KEY_CODE_LEFT,
    KEY_CODE_RIGHT,
    KEY_CODE_SPACE
} from "./global.js"

import {
    updateMissile
} from "./missile.js"

function update() {
    const currentTime = Date.now();
    const dt = (currentTime - GAME_STATE.lastTime) / 1000;
    updatePlayer(dt);
    updateMissile(dt);
    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function init() {
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