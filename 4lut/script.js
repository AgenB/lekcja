// fetch("https://swapi.co/api/people/").then(function(response) {
//     return response.json();
// }).then(function(responseUnpacked) {
//     let dane = responseUnpacked.results;
//     dane.forEach(function(hero) {
//         console.log(hero.name);
//         let li = document.createElement("li");
//         li.innerText = hero.name;

//         document.querySelector(".swList").appendChild(li);
//     })
// })

const getData = {
    getBtn: document.querySelector(".getSWAPI"),
    swList: document.querySelector(".swList"),

    getAllFromSW: function() {
        if (this.swList.querySelectorAll("li").length != 0) {
            return;
        }
        fetch("https://swapi.co/api/people/").then(function(response) {
            return response.json();
        }).then(function(responseUnpacked) {
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
            }, getData);
        });
    },
    deleteFromList: function(event) {
        if (event.target.classList.contains("closeBtn")) {
            event.target.parentElement.remove();
        }
    },

    init: function() {
        this.getBtn.addEventListener("click", this.getAllFromSW.bind(getData));
        this.swList.addEventListener("click", this.deleteFromList.bind(getData));
    }
}

getData.init();