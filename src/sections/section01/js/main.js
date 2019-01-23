function playSound(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0; // перемотка к началу
  audio.play();
}

function removeTransition(evt) {
  if (evt.propertyName !== 'transform') return;
  if (evt.target.classList.contains('playing')) {
    evt.target.classList.remove('playing');
    console.log(evt.target);
  }
}

window.addEventListener('keydown', playSound);
/* авторское решение
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
*/
// моё решение с делегированием
const keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removeTransition);
