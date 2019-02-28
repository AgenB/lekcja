var app = {
    tablica: [1,2,3,4],

    addBtn: document.querySelector(".add"),
    delBtn: document.querySelector(".remove"),
    input: document.querySelector(".input"),
    output: document.querySelector(".output"),
    showArray: document.querySelector(".tablica"),

    addNum: function() {
        this.tablica.push(parseInt(this.input.value));
        this.input.value = "";
        this.update();
    },
    delNum: function() {
        this.tablica.pop();
        this.update();
    },
    update: function() {
        let sum = 0;
        this.tablica.forEach(function(a) {
            sum += a;
        });
        this.showArray.innerText = "tablica: " + this.tablica;
        this.output.innerText = "suma: " + sum;
        this.output.style.background = "rgb(" + sum + ",10,10)";
    },
    init: function() {
        this.addBtn.addEventListener("click", this.addNum.bind(this));
        this.delBtn.addEventListener("click", this.delNum.bind(this));
        this.update();
    }
}

app.init();