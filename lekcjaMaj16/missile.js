import { GAME_STATE, MISSILE_MAX_SPEED } from "./global.js"
import { setPosition } from "./tools.js"

export function createMissile($container, x, y) {
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

export function updateMissile(dt) {
    const missiles = GAME_STATE.missiles;
    missiles.map(missile => {
        missile.y -= MISSILE_MAX_SPEED * dt;
        setPosition(missile.$missile, missile.x, missile.y);
    })
}