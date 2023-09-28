gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x:200,
    opacity:1,
    duration:200,
    scrollTrigger:{
        trigger:".square2",
        start:"top center",
        end:"center",
        scrub:true,
        pin:".square",
        pinSpacing:false,
    }
})
