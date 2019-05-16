const acc = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");

const tab = document.querySelectorAll(".tab");
const tabSection = document.querySelectorAll(".tabSection");

acc.forEach(function(elem) {
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

tab.forEach(function(elem, i) {
    let section = tabSection[i];
    elem.addEventListener("click", function() {
        tab.forEach(function(el) {el.classList.remove("activeTab")});
        tabSection.forEach(function(el) {el.classList.remove("activeTabSection")});
        this.classList.add("activeTab");
        section.classList.add("activeTabSection");
    })
});