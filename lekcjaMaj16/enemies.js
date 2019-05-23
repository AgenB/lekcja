import { GAME_STATE, GAME_WIDTH, ENEMY_HORIZONTAL_PADDING } from "./global.js";
import { setPosition } from "./tools.js";

export function createEnemy($container, x, y) {
    const $enemy = document.createElement("img");
    $enemy.src = "img/spaceShips_009.png";
    $enemy.className = "enemy";
    $container.appendChild($enemy);
    const enemy = {
        x,
        y,
        $enemy
    }
    GAME_STATE.enemies.push(enemy);
    setPosition($enemy, x, y);
}

export function updateEnemy() {
    const dx = Math.sin(GAME_STATE.lastTime / 1000) * 50;
    const dy = Math.cos(GAME_STATE.lastTime / 1000) * 50;
    GAME_STATE.enemies.map(enemy => {
        let x = enemy.x + dx;
        let y = enemy.y + dy;
        setPosition(enemy.$enemy, x, y);
    });
    GAME_STATE.enemies = GAME_STATE.enemies.filter(enemy => !enemy.isDead);
}

export function destroyEnemy($container, enemy) {
    $container.removeChild(enemy.$enemy);
    enemy.isDead = true;
}

export function createEnemyArmy() {
    // const enemySpacing = (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / ()
}