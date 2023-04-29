const menuBtn = document.querySelector(".menu-btn")
const buttonHover = document.querySelectorAll(".button")
const buttonSpanMenu = document.querySelector(".button-span")

const menuItemsArray = document.querySelectorAll(".array-item")


menuBtn.addEventListener("click", () =>{
    menuItemsArray.forEach(item => {
        item.classList.toggle("active")
    })

    if(menuBtn.classList.contains("active")){
        buttonSpanMenu.textContent = "Close"
    }else{
        buttonSpanMenu.textContent = "Menu"
    }
})

buttonHover.forEach(item => {
    item.addEventListener("mouseover", (e) =>{
    const x = (e.pageX - item.offsetLeft);
    const y = (e.pageY - item.offsetTop);
    
    item.style.setProperty('--xPos', x + 'px')
    item.style.setProperty('--yPos', y + 'px')
    })
})

setInterval(() =>{
    setTimeout(() =>{
     document.querySelector(".scene").classList.toggle("animate")
    },100)

    document.querySelector(".card").classList.toggle("is-flipped")
}, 4000)