const imie = document.querySelector("#imie");
const list = document.querySelector("#list");
const sendBtn = document.querySelector("#sendbtn");
const getBtn = document.querySelector("#getbtn");

sendBtn.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "dane_baza.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let name = imie.value;
    xhr.send("imie=" + name);
});

getBtn.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("Get", "dane_odbieranie.php", true);
    xhr.send();
    xhr.addEventListener("load", function() {
        let result = JSON.parse(xhr.response);
        list.innerHTML = "";
        result.map(function(e) {
            let li = document.createElement("li");
            li.innerText = e.imiona;
            list.appendChild(li);
        });
    });
});