gsap.registerPlugin(ScrollTrigger)

const cards = gsap.utils.toArray(".overlap-card")
cards.reverse()

gsap.to(cards,{
    y: -900,
    rotate: -90,
    duration: 0.5,
    stagger: 0.5,
    ease: "ease",

    scrollTrigger:{
        trigger: ".section-four",
        start: "top top",
        scrub: true,
        pin: true
    }
})
