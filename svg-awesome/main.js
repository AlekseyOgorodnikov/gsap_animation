import './style.scss';

import { gsap, Back, TweenMax } from 'gsap';

let tl = gsap.timeline({
  defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 },
});
let tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });
let tl3 = gsap.timeline({ defaults: { duration: 1.5 } });

tl.from('.card-bg', { delay: 1, scale: 0.2, transformOrigin: 'center' }, '=.2')
  .from('.card-top', { scaleY: 0, transformOrigin: 'top' })
  .from('.icon', { scale: 0.2, transformOrigin: 'center' }, '-=.7')
  .from('.blip1', { scaleX: 0 })
  .from('.blip2', { scaleX: 0 }, '-=.2')
  .from('.blip3', { scaleX: 0 }, '-=.3')
  .from('.blip4', { scaleX: 0 }, '-=.5')
  .from('.blip5', { scaleX: 0 }, '-=.7');

tl2.to('.whole-card', { y: 10, repeat: -1, yoyo: true });

tl3.from('.main-content', { opacity: 0, y: 40, stagger: 0.3 });

// Text animation
const text = document.querySelector('.text');

const splitText = (el) => {
  el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
    return (
      `<div class='word'>` +
      m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
      `</div>`
    );
  });
  return el;
};

const split = splitText(text);

function random(min, max) {
  return Math.random() * (max - min) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, index) => {
  TweenMax.from(el, 1.5, {
    opacity: 0,
    scale: 0.1,
    x: random(-50, 500),
    y: random(-50, 500),
    z: random(-50, 500),
    delay: index * 0.02,
    repeat: 0,
    yoyo: true,
  });
});
