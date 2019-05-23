import { GAME_STATE, MISSILE_MAX_SPEED, $container } from "./global.js"
import { setPosition, rectIntersect } from "./tools.js"
import { destroyEnemy } from "./enemies.js";

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
        if (missile.y < 0) {
            destroyMissile($container, missile);
        }
        const r1 = missile.$missile.getBoundingClientRect();

        GAME_STATE.enemies.map(enemy => {
            const r2 = enemy.$enemy.getBoundingClientRect();
            if (rectIntersect(r1, r2)) {
                destroyEnemy($container, enemy);
                destroyMissile($container, missile);
            }
        });
    });
    GAME_STATE.missiles = GAME_STATE.missiles.filter(missile => !missile.isDead);
}

function destroyMissile($container, missile) {
    $container.removeChild(missile.$missile);
    missile.isDead = true;
}