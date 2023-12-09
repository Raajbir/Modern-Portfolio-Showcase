Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.makeMagnet(".img");

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
let feat=document.querySelector("#featured");

feat.addEventListener("mouseenter",()=>{
    vid.play();
})

feat.addEventListener("mouseleave",()=>{
    vid.pause();
})
