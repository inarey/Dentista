// javascript for the information section

const info = document.querySelector('.info');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
info.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // hide other contents
    contents.forEach(function (content) {
      content.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
