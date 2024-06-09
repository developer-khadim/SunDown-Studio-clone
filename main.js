
var scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".con", {
            scrollTrigger: {
                trigger: ".con",
                start: "top 80%",
                end: "bottom 80%",
                scrub: 1,
                pin: true,
                pinSpacing: false
            },
            y: 0,
            duration: 1
        });
        gsap.to(".con", {
            scrollTrigger: {
                trigger: ".con",
                start: "top 80%",
                end: "bottom 80%",
                scrub: 1,
                pin: true,
                pinSpacing: false
         } ,
            y: 0,
            duration: 1
        });