export const KEY_CODE_LEFT = 37;
export const KEY_CODE_RIGHT = 39;
export const KEY_CODE_SPACE = 32;

export const GAME_WIDTH = 640;
export const GAME_HEIGHT = 480;

export const ENEMY_HORIZONTAL_PADDING = 80;
export const ENEMY_VERTICAL_PADDING = 50;
export const ENEMY_VERTICAL_SPACING = 70;
export const ENEMY_PER_ROW = 10;
export const ENEMY_ROWS = 3;

export const PLAYER_WIDTH = 20;
export const PLAYER_SPEED = 250;
export const MISSILE_MAX_SPEED = 1000;

export const GAME_STATE = {
    lastTime: Date.now(),
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    missileShot: false,
    playerX: 0,
    playerY: 0,
    missiles: [],
    enemies: []
}

export const $container = document.querySelector(".game");
export const $playerDOM = document.createElement("img");