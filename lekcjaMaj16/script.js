const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;

const PLAYER_WIDTH = 20;

function setPosition($element, x, y) {
    $element.style.transform = `translate(${x}px, ${y}px)`;
}

function createPlayer($container) {
    const $player = document.createElement("img");
    $player.src = "img/spaceShips_004.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, GAME_WIDTH/2, GAME_HEIGHT-50);
}

function init() {
    const $container = document.querySelector(".game");
    createPlayer($container);
}

function onKeyDown(e) {
    console.log(e);
}

init();

window.addEventListener("keydown", onKeyDown);