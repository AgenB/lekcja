const tabsSidebar = document.querySelectorAll('.tabs_sidebar');
const tabsContent = document.querySelectorAll('.tabs_content');
const btnGet = document.querySelector(".getData");
const list = document.querySelector("data");


let xhr = new XMLHttpRequest();
xhr.open("GET", "http://172.16.131.125/spr/z_ghj/tabs/get.php", true);
xhr.send();
xhr.addEventListener("load", function() {
    if (this.status == 200) {
        let response = JSON.parse(this.response);
        response.forEach(item => {
            let tabButton = document.createElement("button");
            tabButton.className = "tabs_btn";
            tabButton.innerText = item[0];
            tabsSidebar.appendChild(tabButton);
        });
        console.log(response);
    }
    else {
        console.log("Stan połączenia: " + this.status);
    }
});
xhr.addEventListener("error", function() {
    console.log("Brak połączenia z serwerem");
});



// tabsBtn.forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         const tabNr = button.dataset.tabNr;
//         console.log(button);
//         tabsBtn.forEach(btn=>{
//             btn.classList.remove("isActive");
//         });
//         button.classList.add("isActive");
//     });
// });