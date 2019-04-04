const button = document.querySelector(".changeColor");
const div = document.querySelector(".top");
let isChanged = false;
button.addEventListener("click", function() {
    div.classList.toggle("red");
});