import gsap from 'gsap'

export default () => {
    //reverse element
    let revsersed = null
    function smartphonePositions () {
        const element1 = document.querySelector('.switch-1');
        const element2 = document.querySelector('.switch-2');
        revsersed = true
        if (element1)
            element1.parentNode.insertBefore(element2, element1);
    }
    function desktopPosition () {
        const element1 = document.querySelector('.switch-1');
        const element2 = document.querySelector('.switch-2');
        // Vérifie si les éléments sont déjà inversés
        if (revsersed && element1) {
            element2.parentNode.insertBefore(element1, element2);
        }
    }
    const primaryNav = document.querySelector('.primary-navigation')
    const navToggle = document.querySelector('.mobile-nav-toggle')
    document.body.classList.remove('menu-open');
    const mediaQuery = window.matchMedia('(max-width: 57em)');
    const handleMediaQuery = (mq) => {
        const elements = document.querySelectorAll('.menu-item a');
        if (mq.matches) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add('smartphone');
            }
            smartphonePositions()
        } else {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('smartphone');
            }
            desktopPosition()
        }
    };
    handleMediaQuery(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQuery);
    document.addEventListener('DOMContentLoaded', pageTransitionOut);
    function pageTransitionIn () {
        var tlIn = gsap.timeline()
        tlIn.to('ul.overlay li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: 0.05, ease: "power4.out" })
    }
    function pageTransitionOut () {
        var tlOut = gsap.timeline()
        tlOut.to('ul.overlay li', { duration: .6, scaleY: 0, transformOrigin: "top left", stagger: 0.05, delay: 0, ease: "power4.inOut" })
    }
    const toggleVisibility = () => {
        const visibility = primaryNav.getAttribute('data-visible')
        if (visibility === 'false') {
            primaryNav.setAttribute('data-visible', true)
            navToggle.setAttribute('aria-expanded', true)
            document.body.classList.add('menu-open');
            pageTransitionIn()
        } else {
            primaryNav.setAttribute('data-visible', false)
            navToggle.setAttribute('aria-expanded', false)
            document.body.classList.remove('menu-open');
            pageTransitionOut()
        }
    }
    navToggle.addEventListener('click', toggleVisibility)
}