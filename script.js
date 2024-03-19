let basicAnimation = document.querySelector(".basic");
let advanceAnimation = document.querySelector(".advance");
let regularAnimation = document.querySelector(".regular");

let basicanimation = gsap.to(".basic",{
    scale:1.2,
    // opacity:0,
    paused:true
});
let advanceanimation = gsap.to(".advance",{
    scale:1.2,
    // opacity:0,
    paused:true
});
let regularanimation = gsap.to(".regular",{
    scale:1.2,
    // opacity:0,
    paused:true
});

basicAnimation.addEventListener("mouseenter", () => basicanimation.play());
basicAnimation.addEventListener("mouseleave", () => basicanimation.reverse());
advanceAnimation.addEventListener("mouseenter", () => advanceanimation.play());
advanceAnimation.addEventListener("mouseleave", () => advanceanimation.reverse());
regularAnimation.addEventListener("mouseenter", () => regularanimation.play());
regularAnimation.addEventListener("mouseleave", () => regularanimation.reverse());