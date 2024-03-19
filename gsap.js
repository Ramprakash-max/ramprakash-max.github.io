var tl = gsap.timeline();

tl.from("#navbar h1 ,#nav-mid a,#navbar button",{
    opacity:0,
    y:-100,
    duration:1,
    stagger:0.3
})

tl.from(".salogan h1",{
    x:-1000,
    duration:1.2,
    
})

gsap.from("#page2 h1",{
    opacity:0,
    y:-100,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:5
    }
})

gsap.from("#page2 .card ",{
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .card",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        scrub:5
    }
})

gsap.from("#page3 .membership",{
    opacity:0,
    y:-100,
    duration:0.8,
    scrollTrigger:{
        trigger:"#page3 .membership",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:5
    }
})

gsap.from("#page3 .basic",{
    opacity:0,
    x:-100,
    duration:0.3,
    scrollTrigger:{
        trigger:"#page3 .basic",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
gsap.from("#page3 .advance",{
    opacity:0,
    y:100,
    duration:0.3,
    scrollTrigger:{
        trigger:"#page3 .advance",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
gsap.from("#page3 .regular",{
    opacity:0,
    x:100,
    duration:0.3,
    scrollTrigger:{
        trigger:"#page3 .regular",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})