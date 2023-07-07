import barba from '@barba/core';
import navigation from './navigation.js'
import scrollTrigger from './scrollTrigger.js'
import Splitting from "splitting";
import occludedMail from './occludedMail.js';
import accordion from './accordion.js';
import { animationLeave, animationSmartphoneLeave } from './animations';

Splitting();
navigation()
scrollTrigger()
occludedMail()
accordion()

barba.init({
    sync: true,
    transitions: [
        {
            name: 'default',
            async leave (data) {
                await animationLeave(data.current.container)

            },
            async afterLeave (data) {
                data.current.container.style.display = 'none';
            },
            async beforeEnter (data) {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                Splitting();
                navigation()
                scrollTrigger()
            },
        },
        {
            name: 'smartphone',
            to: {
                // define a custom rule based on the trigger class
                custom: ({ trigger }) => {
                    return trigger.classList && trigger.classList.contains('smartphone');
                },
            },
            async leave (data) {
                await animationSmartphoneLeave(data.current.container)
            },
            async beforeEnter (data) {
                Splitting();
                navigation()
                scrollTrigger()
            },
        },
    ]
});

barba.hooks.after(() => {
    navigation()
    occludedMail()
    accordion()
})

