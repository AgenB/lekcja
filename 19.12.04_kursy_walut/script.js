(
    function przelicznik() {
        const input = document.querySelector(".inputPLN");
        const rate = document.querySelector(".rate");
        const result = document.querySelector(".resultUSD");
        const button = document.querySelector(".calc");

        let exchangeRate = 0;

        let xhr = new XMLHttpRequest;
        xhr.responseType = "json";
        xhr.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json", true);
        xhr.send();
        xhr.addEventListener("load", function() {
            exchangeRate = xhr.response.rates[0].mid;
            rate.innerText = exchangeRate + " PLN";
        });

        button.addEventListener("click", function() {
            result.innerText = (parseFloat(input.value) / exchangeRate).toFixed(2) + " USD";
        });
    }
)();