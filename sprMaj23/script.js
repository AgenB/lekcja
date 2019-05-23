const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");
const accordions = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");

tabs.forEach(function(elem, i) {
    const section = sections[i];
    elem.addEventListener("click", function() {
        tabs.forEach(function(el) {el.classList.remove("activeButton");});
        sections.forEach(function(el) {el.classList.remove("activeTextbox");});
        this.classList.add("activeButton");
        section.classList.add("activeTextbox");
    });
});

accordions.forEach(function(elem) {
    elem.addEventListener("click", function() {
        const panel = this.nextElementSibling;
        if (this.classList.contains("activeButton")) {
            accordions.forEach(function(el) {el.classList.remove("activeButton");});
            panels.forEach(function(el) {el.classList.remove("activeTextbox");});
        }
        else {
            accordions.forEach(function(el) {el.classList.remove("activeButton");});
            panels.forEach(function(el) {el.classList.remove("activeTextbox");});
            this.classList.add("activeButton");
            panel.classList.add("activeTextbox");
        }
    });
});