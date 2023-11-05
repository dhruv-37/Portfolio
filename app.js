window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let cursor = document.querySelector('#cursor');

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x - 11 + "px";
    cursor.style.top = dets.y - 11 + "px";
})

let cursorBlr = document.querySelector('#cursor-blur');

document.addEventListener("mousemove", function(dets) {
    cursorBlr.style.left = dets.x - 75 + "px";
    cursorBlr.style.top = dets.y - 75 + "px";
})

gsap.to('.nav-bar', {
    transform: "translateY(10px)",
    opacity: 1,
    duration: 0.875
})

gsap.to('.socials', {
    transform: "translateX(50px)",
    opacity: 1,
    duration: 0.875
})

gsap.to('.intro .hi-there p', {
    transform: "translateY(-10px) scale(1)",
    opacity: 1,
    duration: 1,
    delay: 0.6
})

gsap.to('.intro .welcome p', {
    transform: "translateY(-10px)",
    opacity: 1,
    duration: 0.9,
    delay: 0.7
})

gsap.to('.intro .main-content p', {
    transform: "translateY(-10px)",
    opacity: 1,
    duration: 0.8,
    delay:0.9 
})

gsap.to('.intro #github', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 0.8,
    delay: 1.5
})

gsap.to('.plane', {
    transform: "translateX(1800px) translateY(-500px) scale(1.1) rotate(50deg)",
    duration: 2.5,
})

gsap.to('.plane2', {
    transform: "translateX(-1800px) translateY(-500px) scale(1.1) rotate(-50deg)",
    duration: 2.5,
    scrollTrigger: {
        trigger: '.plane2',
        scroller: 'body',
    }
})

gsap.to('.container ~ #scroller', {
    opacity: 1,
    duration: 1,
    delay: 1.3
})

gsap.to('.expvsreal-container ~ #scroller', {
    opacity: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".expvsreal-container ~ #scroller",
        scroller: "body"
    }
})

gsap.to(".portfolio .about .section-title", {
    opacity: 1,
    duration: 0.875,
    transform: "translateX(0px)",
    scrollTrigger: {
        trigger: ".portfolio .about .section-title",
        scroller: "body",
    }
})

gsap.to(".portfolio .about .about-info", {
    opacity: 1,
    duration: 0.875,
    transform: "translateY(0px)",
    scrollTrigger: {
        trigger: ".portfolio .about .about-info",   
        scroller: "body",
    },
    delay: 0.2
})

gsap.to(".portfolio .skills .section-title", {
    opacity: 1,
    duration: 0.875,
    transform: "translateX(0px)",
    scrollTrigger: {
        trigger: ".portfolio .skills .section-title",
        scroller: "body",
    }
})

gsap.to('.portfolio .skills .skills-container #mongo', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #mongo",
        scroller: "body"
    }
})

gsap.to('.portfolio .skills .skills-container #node', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #node",
        scroller: "body"
    }
})

gsap.to('.portfolio .skills .skills-container #htmlcss', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #htmlcss",
        scroller: "body"
    }
})

gsap.to('.portfolio .skills .skills-container #js', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 0.6,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #js",
        scroller: "body"
    }
})

gsap.to('.portfolio .skills .skills-container #sql', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 0.8,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #sql",
        scroller: "body"
    }
})

gsap.to('.portfolio .skills .skills-container #java', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 1,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #java",
        scroller: "body"
    }
})

gsap.to('.portfolio .skills .skills-container #cpp', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 1.2,
    scrollTrigger: {
        trigger: ".portfolio .skills .skills-container #cpp",
        scroller: "body"
    }
})

gsap.to(".portfolio .journey .section-title", {
    opacity: 1,
    duration: 0.875,
    transform: "translateX(0px)",
    scrollTrigger: {
        trigger: ".portfolio .journey .section-title",
        scroller: "body",
    }
})

gsap.to('.circle', {
    transform: "translateX(0px)",
    opacity: 1,
    duration: 0.875,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".circle",
        scroller: "body"
    }
})

gsap.to('.line', {
    transform: "translateX(0px)",
    opacity: 1,
    duration: 0.875,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".line",
        scroller: "body"
    }
})

gsap.to("#stepone", {
    opacity: 1,
    duration: 0.875,
    delay: 0.5,
    transform: "translateY(0px)",
    scrollTrigger: {
        trigger: "#stepone",
        scroller: "body"
    }
})

gsap.to("#steptwo", {
    opacity: 1,
    duration: 0.875,
    delay: 0.7,
    transform: "translateY(0px)",
    scrollTrigger: {
        trigger: "#stepone",
        scroller: "body"
    }
})

gsap.to(".loading p", {
    opacity: 1,
    duration: 0.5,
    transform: "translateY(0px)",
    scrollTrigger: {
        trigger: ".loading p",
        scroller: "body"
    }
})

gsap.to(".loading .loading-line", {
    opacity: 1,
    duration: 2,
    width: "100%",
    scrollTrigger: {
        trigger: ".loading .loading-line",
        scroller: "body"
    }
})

gsap.to('.projects-heading #one', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 0.875,
    delay: 1.7,
    scrollTrigger: {
        trigger: '.projects-heading #one',
        scroller: "body"
    }
})

gsap.to('.projects-heading #two', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 0.875,
    delay: 1.8,
    scrollTrigger: {
        trigger: '.projects-heading #two',
        scroller: "body"
    }
})

gsap.to('.project-container #one', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 2.2,
    scrollTrigger: {
        trigger: '.project-container',
        scroller: "body"
    }
})

gsap.to('.project-container #two', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 2.4,
    scrollTrigger: {
        trigger: '.project-container',
        scroller: "body"
    }
})

gsap.to('.project-container #three', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    delay: 2.6,
    scrollTrigger: {
        trigger: '.project-container',
        scroller: "body"
    }
})

gsap.to('.expvsreal-title', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 0.875,
    delay: 0.1,
    scrollTrigger: {
        trigger: '.expvsreal-title .real',
        scroller: "body"
    }
})

gsap.to('.left #one', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 1,
    scrollTrigger: {
        trigger: '.left #one',
        scroller: "body"
    }
})

gsap.to('.left #two', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 1,
    scrollTrigger: {
        trigger: '.left #two',
        scroller: "body"
    }
})

gsap.to('.right #three', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 1,
    scrollTrigger: {
        trigger: '.right #three',
        scroller: "body"
    }
})

gsap.to('.right #four', {
    opacity: 1,
    transform: "translateY(0px)",
    duration: 1,
    scrollTrigger: {
        trigger: '.right #four',
        scroller: "body"
    }
})

gsap.to('.expectations p', {
    opacity: 1,
    duration: 1,
    transform: "translateX(0px)",
    scrollTrigger:{
        trigger: ".expectations p",
        scroller: "body"
    }
})

gsap.to('.reality p', {
    opacity: 1,
    duration: 1,
    transform: "translateX(0px)",
    scrollTrigger:{
        trigger: ".reality p",
        scroller: "body"
    }
})

gsap.to('.exp .title', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    scrollTrigger: {
        trigger: ".exp .exp-down",
        scroller: "body"
    }
})

gsap.to('.exp .exp-down', {
    opacity: 1,
    transform: "translateX(0px) rotate(720deg)",
    duration: 0.875,
    scrollTrigger: {
        trigger: ".exp .exp-down",
        scroller: "body"
    }
})

gsap.to('.real .title', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    scrollTrigger: {
        trigger: ".real .real-down",
        scroller: "body"
    }
})

gsap.to('.real .real-down', {
    opacity: 1,
    transform: "translateX(0px)",
    duration: 0.875,
    scrollTrigger: {
        trigger: ".real .real-down",
        scroller: "body"
    }
})

const dropdown = document.querySelectorAll('#dropdwn');

for(let i=0; i<dropdown.length; i++){
    dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}