gsap.registerPlugin(ScrollTrigger)

const cards = gsap.utils.toArray(".overlap-card")

const cardsReversed = cards.reverse()

const tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".section-four",
    pin: true,
    start: "top top",
    end: "bottom+=1000px bottom",
    scrub: true
    }
})

cardsReversed.forEach(card => {
    tl.to(card,{
        y: -900,
        rotate: -90
    })
})