(
    function calc() {
        const clickdiv = document.querySelector(".clickdiv");
        const input = document.querySelector(".input");
        const calc1 = document.querySelector(".calc1");
        const result1 = document.querySelector(".result1");
        const static = document.querySelector(".static");
        const calc2 = document.querySelector(".calc2");
        const result2 = document.querySelector(".result2");

        clickdiv.addEventListener("click", function() {
            console.dir(clickdiv);
        });
        calc1.addEventListener("click", function() {
            result1.innerText = parseFloat(input.value) * 2;
        });
        calc2.addEventListener("click", function() {
            result2.innerText = parseFloat(static.innerText) ** 2;
        });
    }
)();