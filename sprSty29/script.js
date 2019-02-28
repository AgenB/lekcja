var firemanSam = {
    iloscWody: 1000,
    iloscUgaszonychPozarow: 0,
    iloscPaliwa: 300,

    stat1: document.querySelector(".stat1"),
    stat2: document.querySelector(".stat2"),
    stat3: document.querySelector(".stat3"),

    btn1: document.querySelector(".btn1"),
    btn2: document.querySelector(".btn2"),
    btn3: document.querySelector(".btn3"),

    gasPozar: function() {
        if (this.iloscWody > 0) {
            this.iloscWody -= 200;
            this.iloscUgaszonychPozarow += 1;
            this.update();
        }
    },
    jedzDoPozaru: function() {
        if (this.iloscPaliwa > 0) {
            this.iloscPaliwa -= 50;
            this.update();
        }
    },
    uzupelnijZapasy: function() {
        this.iloscWody = 1000;
        this.iloscPaliwa = 300;
        this.update();
    },

    update: function() {
        this.stat1.innerText = "Ilość Wody: " + this.iloscWody;
        this.stat2.innerText = "Ilość Ugaszonych Pożarów: " + this.iloscUgaszonychPozarow;
        this.stat3.innerText = "Ilość Paliwa: " + this.iloscPaliwa;
    },
    init: function() {
        this.btn1.addEventListener("click", this.gasPozar.bind(this));
        this.btn2.addEventListener("click", this.jedzDoPozaru.bind(this));
        this.btn3.addEventListener("click", this.uzupelnijZapasy.bind(this));
        this.update();
    }
}

firemanSam.init();