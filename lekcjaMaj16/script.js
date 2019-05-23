import { createPlayer, updatePlayer } from "./player.js"

import {
    GAME_STATE,
    $container
} from "./global.js"

import {
    updateMissile
} from "./missile.js"
import { createEnemy } from "./enemies.js"
import { onKeyDown, onKeyUp } from "./controls.js"

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
    createEnemy($container, 100, 100);
}

init();

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);