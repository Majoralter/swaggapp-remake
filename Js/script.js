const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 70
})

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


const menuBtn = document.querySelector(".menu-btn")
const buttonHover = document.querySelectorAll(".button")
const buttonSpanMenu = document.querySelector(".button-span")

const menuItemsArray = document.querySelectorAll(".array-item")
const images = document.querySelectorAll(".rotate-img")
const scenes = document.querySelectorAll(".scene-bounce")


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
     scenes.forEach(scene =>{
        scene.classList.toggle("animate")
     })
    },100)

    images.forEach(image => {
        image.classList.toggle("is-flipped")
    })
}, 4000)