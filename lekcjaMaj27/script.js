const tabsBtn = document.querySelectorAll('.tabs_btn');
const tabsContent = document.querySelectorAll('.tabs_content');

console.dir(tabsBtn);

tabsBtn.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const tabNr = button.dataset.tabNr;
        console.log(button);
        tabsBtn.forEach(btn=>{
            btn.classList.remove("isActive");
        });
        button.classList.add("isActive");
    });
});