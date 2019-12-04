(
    function przelicznik() {
        const input = document.querySelector(".inputPLN");
        const rateWindow = document.querySelector(".rateWindow");
        const rate = document.querySelector(".rate");
        const currency = document.querySelector(".currency");
        const result = document.querySelector(".resultUSD");
        const button = document.querySelector(".calc");

        let exchangeRate = 0;

        let xhr = new XMLHttpRequest;
        xhr.responseType = "json";
        xhr.open("GET", "http://api.nbp.pl/api/exchangerates/tables/a?format=json", true);
        xhr.send();
        xhr.addEventListener("load", function() {
            xhr.response[0].rates.forEach(function(item, i) {
                let option = document.createElement("option");
                option.value=i;
                option.innerText = item.code;
                currency.appendChild(option);
            });
        });

        currency.addEventListener("change", function() {
            exchangeRate = xhr.response[0].rates[currency.value].mid;
            rate.innerText = exchangeRate;
        });

        button.addEventListener("click", function() {
            result.innerText = (parseFloat(input.value) / exchangeRate).toFixed(2) + " USD";
        });
    }
)();