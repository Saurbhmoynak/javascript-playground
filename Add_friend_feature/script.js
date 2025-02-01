const h4_1 = document.querySelector('.status');
const btn = document.querySelector('button');
let check = 0;

btn.addEventListener('click', () => {
  if (!check) {
    h4_1.textContent = "Friends";
    h4_1.style.color = "green";
    btn.textContent = "remove";
    check = 1;
  }
  else {
    h4_1.textContent = "Stranger";
    h4_1.style.color = "red";
    btn.textContent = "Add Friend";
    check = 0;
  }
})
