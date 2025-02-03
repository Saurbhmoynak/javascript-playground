const elem = document.querySelectorAll('.element');

elem.forEach((event) => {
  event.addEventListener('mousemove', (e) => {
    const img = e.target.querySelector('img');
    if (img) {
      img.style.left = e.clientX + "px";
    }
  })

  event.addEventListener('mouseleave', () => {
    event.childNodes[3].style.opacity = 0;
  })

  event.addEventListener('mouseenter', (e) => {
    event.childNodes[3].style.opacity = 1;
  })
  
});


