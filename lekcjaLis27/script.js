(
    function slider() {
        const sliderContent = document.querySelector(".sliderContent");
        const btnUp = document.querySelector(".up");
        const btnDown = document.querySelector(".down");
        const btnAddSlide = document.querySelector(".addSlide");
        let dx = 0;
        let dxOffset = 100 / sliderContent.childElementCount;
        sliderContent.style.height = 100 * sliderContent.childElementCount + "%";

        btnUp.addEventListener("click", function() {
            if (dx <= -dxOffset) {
                dx = dx + dxOffset;
                sliderContent.style.transform = `translateY(${dx}%)`;
            }
        });
        btnDown.addEventListener("click", function() {
            if (dx >= -100 + dxOffset) {
                dx = dx - dxOffset;
                sliderContent.style.transform = `translateY(${dx}%)`;
            }
        });
        btnAddSlide.addEventListener("click", function() {
            let div = document.createElement("div");
            div.classList.add("slide", "slide4");
            sliderContent.appendChild(div);

            console.log(sliderContent.style.transform);
        });
    }
)();