import { GAME_STATE } from "./global.js";
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

}