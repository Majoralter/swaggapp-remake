const menuBtn = document.querySelector(".menu-btn")

const menuItemsArray = document.querySelectorAll(".array-item")


menuBtn.addEventListener("click", () =>{
    menuItemsArray.forEach(item => {
        item.classList.toggle("active")
    })

    if(menuBtn.classList.contains("active")){
        menuBtn.textContent = "Close"
    }else{
        menuBtn.textContent = "Menu"
    }
})