Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4","./2.mp4","./3.mp4"]});

gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub: 1
    },
    y:"-300%",
    ease: Power1
})

Shery.imageMasker(".images" , {
    mouseFollower: true,
    text: "Explore Projects",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

let vid=document.querySelector("video");

vid.addEventListener("mouseenter",()=>{
    vid.play();
})

vid.addEventListener("mouseleave",()=>{
    vid.load();
})

