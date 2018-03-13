import 'pixi.js'
import { TimelineMax } from 'gsap';

import ImageLoader from './imageLoad'


var targets = document.querySelectorAll('.js-loadme');

var options = {
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
};

var observer = new IntersectionObserver(items => {

    items.forEach(el => {

        if (el.isIntersecting && el.intersectionRatio > 0.1) {
            if (!$(el.target).hasClass('is-init')){
                $(el.target).addClass('is-init');
                new ImageLoader($(el.target));
            }
        }
    });
}, options);

for (var i = 0; i < targets.length; i++) {
    observer.observe(targets[i]);
}
