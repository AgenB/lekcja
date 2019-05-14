const acc = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");

acc.forEach(function(elem) {
    console.log(elem);
    elem.addEventListener("click", function() {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            elem.classList.remove("active");
            panel.style.maxHeight = null;
        }
        else {
            panels.forEach(function(pan) {pan.style.maxHeight = null;});
            acc.forEach(function(el) {el.classList.remove("active");});
            elem.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
});