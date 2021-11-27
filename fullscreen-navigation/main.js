import './style.scss';
import gsap from 'gsap';

let open = document.querySelector('.active');
let exit = document.querySelector('.exit');
let tl = gsap.timeline();

tl.to('.overlay', {
  opacity: 1,
  x: 0,
  scale: 1,
  pointerEvents: 'auto',
  duration: 0.4,
});
tl.to('.stagger', { x: 0, opacity: 1, stagger: 0.4 }, '-=0.4');
tl.pause();

open.addEventListener('click', () => {
  tl.play();
});

exit.addEventListener('click', () => {
  tl.reverse();
});
