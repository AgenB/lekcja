import { GAME_STATE, KEY,BtnGameOver } from "./global.js";
import { init } from "./scripts.js"
import { createPlayer } from "./player.js";

export function onKeyDown(e) {
  if (e.keyCode === KEY.LEFT) {
    GAME_STATE.leftPressed = true;
  } else if (e.keyCode === KEY.RIGHT) {
    GAME_STATE.rightPressed = true;
  } else if (e.keyCode === KEY.SPACE) {
    GAME_STATE.spacePressed = true;
  }
}

export function onKeyUp(e) {
  if (e.keyCode === KEY.LEFT) {
    GAME_STATE.leftPressed = false;
  } else if (e.keyCode === KEY.RIGHT) {
    GAME_STATE.rightPressed = false;
  } else if (e.keyCode === KEY.SPACE) {
    GAME_STATE.spacePressed = false;
    GAME_STATE.shoot = true;
  }
}



window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

BtnGameOver.addEventListener("click", (el) => {
	console.log("GAME OVER");
  GAME_STATE.gameOver = false;
  el.target.style.display = 'none' ;
  init();
})