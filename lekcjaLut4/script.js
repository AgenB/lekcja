const getData = {
    getBtn: document.querySelector(".getSWAPI"),
    nextBtn: document.querySelector(".nextBtn"),
    swList: document.querySelector(".swList"),
    pageNum: 1,

    getAllFromSW: function() {
        fetch("https://swapi.co/api/people/?page=" + this.pageNum).then(function(response) {
            return response.json();
        }).then(function(responseUnpacked) {
            if (this.swList.querySelectorAll("li").length != 0) {
                return;
            }
            let dane = responseUnpacked.results;
            dane.forEach(function(hero) {
                console.log(hero.name);
                let li = document.createElement("li");
                li.innerText = hero.name;
                li.className = "item";
                let closeBtn = document.createElement("div");
                closeBtn.className = "closeBtn";
                this.swList.appendChild(li);
                li.appendChild(closeBtn);
            }, this);
        }.bind(this));
    },
    nextPage: function() {
        this.purgeList();
        this.pageNum += 1;
        this.getAllFromSW();
    },
    purgeList: function() {
        this.swList.querySelectorAll("li").forEach(function(el) {
            el.remove();
        });
    },
    deleteFromList: function(event) {
        if (event.target.classList.contains("closeBtn")) {
            event.target.parentElement.remove();
        }
    },

    init: function() {
        this.getBtn.addEventListener("click", this.getAllFromSW.bind(this));
        this.swList.addEventListener("click", this.deleteFromList.bind(this));
        this.nextBtn.addEventListener("click", this.nextPage.bind(this));
    }
}

getData.init();