import gsap from 'gsap';

const animationSmartphoneLeave = (container) => {
    const timeline = gsap.timeline()

    timeline.to('.primary-navigation li.menu-item', { duration: .4, yPercent: -50, transformOrigin: "bottom left", stagger: 0.02, delay: 0, ease: "power4.inOut" })
        .to('.primary-navigation li.menu-item', { duration: .2, opacity: 0, transformOrigin: "bottom left", stagger: 0.02, ease: "power4.inOut" }, "-=.4")
    return timeline;
}

export default animationSmartphoneLeave;

