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
    //swList: document.querySelector(".swList"),

    getAllFromSW: function() {
        fetch("https://swapi.co/api/people/").then(function(response) {
            return response.json();
        }).then(function(responseUnpacked) {
            let dane = responseUnpacked.results;
            swList = document.querySelector(".swList");
            dane.forEach(function(hero) {
                console.log(hero.name);
                let li = document.createElement("li");
                li.innerText = hero.name;

                this.swList.appendChild(li);
            });
        });
    },

    init: function() {
        this.getBtn.addEventListener("click", this.getAllFromSW.bind(this));
    }
}

getData.init();