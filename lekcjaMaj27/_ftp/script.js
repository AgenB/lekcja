const tabsSidebar = document.querySelector(".tabs_sidebar");
const tabsContent = document.querySelector(".tabs_content");

function getTabs() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://172.16.131.125/spr/z_ghj/tabs/get.php", true);
    xhr.send();
    xhr.addEventListener("load", function() {
        if (this.status == 200) {
            let response = JSON.parse(this.response);

            let tabs = tabsSidebar.querySelectorAll("div");
            let anyActive = false;
            let whichActive = 0;
            tabs.forEach((item, i) => {
                if (item.classList.contains("active_tab")) {
                    anyActive = true;
                    whichActive = i;
                }
            });
            
            clearTabs()
            response.forEach((item, i) => {createTab(item, i)});

            tabs = tabsSidebar.querySelectorAll("div");
            if (tabs) {
                if (tabs[whichActive]) {
                    tabs[whichActive].classList.add("active_tab");
                }
            }
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

function createTab(response, i) {
    let tabButton = document.createElement("div");
    tabButton.className = "tabs_btn";
    tabButton.innerText = `${i + 1}. ${response[1]}`;
    tabButton.dataset.tabId = response[0];
    tabButton.addEventListener("click", activateTab);

    let tabDel = document.createElement("span");
    tabDel.innerText = "X";
    tabDel.className = "tabs_delbtn";
    tabDel.addEventListener("click", removeTab);

    let tabPanel = document.createElement("section");
    tabPanel.className = "tabs_panel";
    tabPanel.innerText = response[2];

    tabButton.appendChild(tabDel);
    tabsSidebar.appendChild(tabButton);
    tabsContent.appendChild(tabPanel);
}

function removeTab(e) {
    console.log("delete");
    e.stopPropagation();
}

function activateTab(e) {
    console.log("activate");
}

function clearTabs() {
    while (tabsSidebar.firstChild) {
        tabsSidebar.removeChild(tabsSidebar.firstChild);
    }
    while (tabsContent.firstChild) {
        tabsContent.removeChild(tabsContent.firstChild);
    }
}

// tabsBtn.forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         const tabNr = button .dataset.tabNr;
//         console.log(button);
//         tabsBtn.forEach(btn=>{
//             btn.classList.remove("isActive");
//         });
//         button.classList.add("isActive");
//     });
// });

getTabs();