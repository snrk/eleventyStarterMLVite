import gsap from 'gsap'

const animationLeave = (container) => {
    const timeline = gsap.timeline()

    timeline.to('ul.overlay li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: 0.05, delay: 0, ease: "power4.inOut" })
    return timeline;

    // return gsap.to(container, {
    //     opacity: 0,
    //     duration: 0.3
    // });
}

export default animationLeave  