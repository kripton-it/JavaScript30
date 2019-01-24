/*
function toggleOpen() {
  this.classList.toggle('open');
}
*/

const panels = document.querySelectorAll('.panel');

function toggleOpen(panel) {
  panels.forEach((item) => {
    if (item !== panel && item.classList.contains('open')) {
      item.classList.remove('open');
    }
  });
  panel.classList.toggle('open');
}

function toggleActive(panel) {
  panel.classList.toggle('open-active');
}

/*
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
*/

const container = document.querySelector('.panels');

container.addEventListener('click', (evt) => {
  const target = evt.target.closest('.panel');
  toggleOpen(target);
});

container.addEventListener('transitionend', (evt) => {
  if (evt.propertyName.includes('flex')) {
    const target = evt.target.closest('.panel');
    toggleActive(target);
  }
});
