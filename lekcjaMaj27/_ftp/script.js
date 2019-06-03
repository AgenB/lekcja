const tabsSidebar = document.querySelector(".tabs_sidebar");
const tabsContent = document.querySelector(".tabs_content");

function getTabs() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://172.16.131.125/spr/z_ghj/tabs/get.php", true);
    xhr.send();
    xhr.addEventListener("load", function() {
        if (this.status == 200) {
            let response = JSON.parse(this.response);
            response.forEach((item, i) => {
                let tabButton = document.createElement("button");
                tabButton.className = "tabs_btn";
                tabButton.innerText = (i + 1) + ". " + item[1];
                tabsSidebar.appendChild(tabButton);
                let id = item[0];
                tabButton.addEventListener("click", removeTab);
                let tabPanel = document.createElement("section");
                tabPanel.className = "tabs_panel";
                tabPanel.innerText = item[2];
                tabsContent.appendChild(tabPanel);
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
}

function clearTabs() {
    while (tabsSidebar.firstChild) {
        tabsSidebar.removeChild(tabsSidebar.firstChild);
    }
    while (tabsContent.firstChild) {
        tabsContent.removeChild(tabsContent.firstChild);
    }
}

function removeTab() {
    console.log(id);
}

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

getTabs();