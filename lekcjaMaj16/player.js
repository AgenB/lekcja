import {
    GAME_STATE,
    GAME_WIDTH,
    GAME_HEIGHT,
    $container,
    PLAYER_WIDTH,
    PLAYER_SPEED,
    $playerDOM
} from "./global.js"

import {
    setPosition,
    clamp
} from "./tools.js"

import {
    createMissile
} from "./missile.js"

export function createPlayer($container) {
    GAME_STATE.playerX = GAME_WIDTH/2;
    GAME_STATE.playerY = GAME_HEIGHT-50;

    $playerDOM.src = "img/spaceShips_004.png";
    $playerDOM.className = "player";
    $container.appendChild($playerDOM);
    setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}

export function updatePlayer(dt) {
    if (GAME_STATE.leftPressed) {GAME_STATE.playerX -= PLAYER_SPEED * dt}
    else if (GAME_STATE.rightPressed) {GAME_STATE.playerX += PLAYER_SPEED * dt}
    GAME_STATE.playerX = clamp(GAME_STATE.playerX, PLAYER_WIDTH, GAME_WIDTH - PLAYER_WIDTH);
    if (GAME_STATE.spacePressed) {
        if (!GAME_STATE.missileShot) {
            createMissile($container, GAME_STATE.playerX, GAME_STATE.playerY);
            GAME_STATE.missileShot = true;
        }
    }
    else {
        GAME_STATE.missileShot = false;
    }
    setPosition($playerDOM, GAME_STATE.playerX, GAME_STATE.playerY);
}