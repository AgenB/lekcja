(
    function slider() {
        const imgSet = document.querySelector(".contentSlider");
        const sliderBtns = document.querySelector(".sliderBtns");
        let dx = 0;
        let dxOffset = 100 / imgSet.childElementCount;
        imgSet.style.width = 100 * imgSet.childElementCount + "%";

        function moveSlider(e) {
            if (e.target.classList.contains("left")) dx = dx + dxOffset;
            else if (e.target.classList.contains("right")) dx = dx - dxOffset;
            imgSet.style.transform = `translateX(${dx}%)`;
        };

        sliderBtns.addEventListener("click", moveSlider);
    }
)();