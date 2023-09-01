gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x:500,
    scrollTrigger:{
        trigger:".square",
        start:"top center",//this will be start when the vh is 4000px
        marker:{
            startOpacity:0.2,
            endOpacity:1
        }
    }
})

gsap.to(".square2",{
    opacity:1,
    x:-300,
    scrollTrigger:{
        trigger:".square2",
        start:"top center",
        end:()=>`+=documen.querySelector(.square2).offSetHeight`,
        scrub:true,
        marker:true,
        toggleClass:"red",
    }
})