/* ========================= Burger - menu ======================== */
document.querySelector('.menu-burger').onclick = function () {
  open()
};

function open() {
  document.body.classList.toggle('_lock');
  // document.getElementById('nav-menu').classList.toggle('_open');
  document.querySelector('.menu-burger').classList.toggle('_close');
}
