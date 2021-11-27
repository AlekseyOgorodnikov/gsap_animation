import './style.css';
import gsap from 'gsap';

const circleSvg = document.querySelector('svg');
const button = document.querySelector('button');
let mouseX = 0;
let mouseY = 0;
// let intv = 0;

window.addEventListener('mousemove', mouseMove);

function mouseMove(event) {
  // console.log(event.clientX, event.clientY);
  // circleSvg.style.top = event.clientY - 46;
  // circleSvg.style.left = event.clientX - 46;
  mouseY = event.clientY / 16 - 45 / 16 + 'rem';
  mouseX = event.clientX / 16 - 45 / 16 + 'rem';
}

const mouse = () => {
  // intv++;
  circleSvg.style.top = mouseY;
  circleSvg.style.left = mouseX;

  // circleSvg.style.opacity = Math.abs(Math.sin(intv * 0.04));

  window.requestAnimationFrame(mouse);
};
mouse();

const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
tl.to(circleSvg, { width: 0, opacity: 0 });
tl.to('body,button', { background: 'white' });
tl.pause();
button.addEventListener('click', () => {
  tl.play();
});
