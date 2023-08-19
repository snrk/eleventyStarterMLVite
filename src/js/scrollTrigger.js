import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default () => {
    const timeline = gsap.timeline()
    const homeLine = document.querySelectorAll('.home-line')
    const homeTitleWord = document.querySelectorAll('.home-title .word')
    const titleWord = document.querySelector('.title .word')
    const subTitleWord = document.querySelectorAll('.subTitle .word')
    const homeImage = document.querySelectorAll('.home-image')
    const headImage = document.querySelectorAll('.head-image')
    const bigArrow = document.querySelectorAll('.big-arrow')
    timeline.to('ul.overlay li', { duration: .6, scaleY: 0, transformOrigin: "top left", stagger: 0.05, delay: 0, ease: "power4.inOut" }, '-=.2')
    if (homeLine.length > 0)
        timeline.to(homeLine, { delay: .3, duration: 1, scaleX: 1, ease: "power3.out" }, '-=.6')
    if (homeTitleWord.length > 0)
        timeline.fromTo(homeTitleWord, { opacity: 0, yPercent: 50, }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1")
    if (titleWord)
        timeline.fromTo(titleWord, { opacity: 0, yPercent: 50, }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1")
    if (subTitleWord.length > 0)
        timeline.fromTo(subTitleWord, { opacity: 0, yPercent: 50, }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.01, ease: "power3.out" }, "-=1")
    if (homeImage.length > 0) {
        gsap.set(homeImage, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
        timeline.to(homeImage, { delay: 0, duration: 1.4, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "power4.inOut" }, "-=1.5")
    }
    if (headImage.length > 0) {
        gsap.set(headImage, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
        timeline.to(headImage, { delay: 0, duration: 1.4, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "power4.inOut" }, "-=1.5")
    }
    if (bigArrow.length > 0) {
        gsap.set(bigArrow, { opacity: 0, xPercent: 30, yPercent: -30 })
        timeline.fromTo(bigArrow, { opacity: 0, xPercent: 30, yPercent: -30 }, { delay: 0, duration: 1, opacity: 1, xPercent: 0, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1.2");
    }
    gsap.registerPlugin(ScrollTrigger);
    const gsapItem = gsap.utils.toArray('.section')
    gsapItem.forEach((gsIt) => {
        const line = gsIt.querySelector('.line')
        const textWord = gsIt.querySelectorAll('.section-title .word')
        const bigTitleWord = gsIt.querySelectorAll('.big-title .word')
        const bigArrowUp = gsIt.querySelector('.big-arrow-up')
        const itemImg = gsIt.querySelectorAll('.image')
        const textLi = gsIt.querySelectorAll('.arrow')
        const arrowLi = gsIt.querySelectorAll('.arrow-icon')
        const textParagraph = gsIt.querySelectorAll('.text-animation')
        const faqPannel = gsIt.querySelector('.accordion-panel h3')
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: gsIt,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none none ",
                markers: false,
            }
        })
        if (line) {
            tl.to(line, { delay: .5, duration: 1, scaleX: 1, ease: "power3.out" });
        } else {
            tl.addPause(1.5); // Ajoute une pause de 1,5 seconde à la timeline
        }
        if (itemImg.length > 0)
            tl.to(itemImg, { delay: 0, duration: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "power3.out" }, "-=.7");
        if (textWord.length > 0)
            tl.fromTo(textWord, { opacity: 0, yPercent: 50 }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1");
        if (bigTitleWord.length > 0)
            tl.fromTo(bigTitleWord, { opacity: 0, yPercent: 50 }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1.4");
        if (bigArrowUp)
            tl.fromTo(bigArrowUp, { opacity: 0, xPercent: 50, yPercent: 50 }, { delay: 0, duration: 1, opacity: 1, xPercent: 0, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1.2");
        if (arrowLi.length > 0)
            tl.fromTo(arrowLi, { opacity: 0, xPercent: -70, yPercent: -170 }, { delay: 0, duration: 1, opacity: 1, xPercent: 0, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "0");
        if (textLi.length > 0)
            tl.fromTo(textLi, { opacity: 0, yPercent: 30 }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1.2");
        if (textParagraph.length > 0)
            tl.fromTo(textParagraph, { opacity: 0, yPercent: 30 }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1.2");
        if (faqPannel)
            tl.fromTo(faqPannel, { opacity: 0, yPercent: 50 }, { delay: 0, duration: 1, opacity: 1, yPercent: 0, stagger: 0.1, ease: "power3.out" }, "-=1.2");
    })
}
