const main = document.querySelector('#main');
const crsr = document.querySelector('.cursor');

console.log(crsr);

main.addEventListener('mousemove', (e) => {
  crsr.style.left = e.clientX + "px";
  crsr.style.top = e.clientY + "px";
})