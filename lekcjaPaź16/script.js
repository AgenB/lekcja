let container = document.querySelector(".container");
let overlay = document.querySelector(".overlay");
let overlayImg = document.querySelector(".overlayImg");
let overlayBtnExit = document.querySelector(".overlayBtnExit");
let overlayBtnLeft = document.querySelector(".overlayBtnLeft");
let overlayBtnRight = document.querySelector(".overlayBtnRight");

let imgList = ["BMW-2-series.jpg", "landscape01.jpg", "landscape02.jpg", "pingwin02.png", "red-car-4.jpg", "red-car-facebook-covers.jpg"];
let imgListRoot = "./images/";

let currentImageIndex = 0;

imgList.forEach(function(elem, i) {
    let img = document.createElement("img");
    img.src = imgListRoot + elem;
    img.classList.add("image");
    img.addEventListener("click", function() {
        overlay.classList.remove("hidden");
        overlayImg.src = imgListRoot + elem;
        currentImageIndex = i;
    })
    container.appendChild(img);
});
overlayBtnExit.addEventListener("click", function() {
    overlay.classList.add("hidden");
});
overlayBtnLeft.addEventListener("click", function() {
    if (currentImageIndex > 0) {
        --currentImageIndex;
        overlayImg.src = imgListRoot + imgList[currentImageIndex];
    }
});
overlayBtnRight.addEventListener("click", function() {
    if (currentImageIndex < imgList.length - 1) {
        ++currentImageIndex;
        overlayImg.src = imgListRoot + imgList[currentImageIndex];
    }
});