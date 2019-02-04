var listaApp = {
    lista: document.querySelector(".lista"),
    input: document.querySelector(".tekst"),
    osoba: document.querySelector(".selectimie"),
    guzik: document.querySelector(".guzik"),

    dodajZadanie: function() {
        let element = document.createElement("div");
        let spanFirst = document.createElement("span");
        let spanSecond = document.createElement("span");
        let acceptElement = document.createElement("i");
        let editElement = document.createElement("i");
        let delElement = document.createElement("i");

        element.className = "element";
        spanFirst.className = "first";
        spanSecond.className = "second";
        acceptElement.className = "fas fa-check acceptBtn";
        editElement.className = "fas fa-pen editBtn";
        delElement.className = "fas fa-times delBtn";

        spanFirst.innerText = this.input.value;
        spanSecond.innerText = this.osoba.value;

        this.lista.appendChild(element);
        element.appendChild(spanFirst);
        element.appendChild(spanSecond);
        element.appendChild(acceptElement);
        element.appendChild(editElement);
        element.appendChild(delElement);

        this.input.value = "";
    },
    btnAction: function(event) {
        if (event.target.classList.contains("delBtn")) {
            event.target.parentElement.remove();
        }
        else if (event.target.classList.contains("editBtn")) {
            event.target.parentElement.querySelector(".first").innerHTML = "<input type='text' class='textField'>";
        }
        else if (event.target.classList.contains("acceptBtn")) {
            event.target.parentElement.querySelector(".first").innerHTML = event.target.parentElement.querySelector(".textField").value;
        }
    },
    init: function() {
        this.guzik.addEventListener("click", this.dodajZadanie.bind(this));
        this.lista.addEventListener("click", this.btnAction.bind(this));
    }
}

listaApp.init();