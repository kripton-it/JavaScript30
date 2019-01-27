// Получаем элементы
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
// все элементы с атрибутом data-skip
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Описываем функции

// 1 - запуск/пауза
/*
function togglePlay() {
  // первый вариант
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  // второй вариант
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
*/
// третий вариант - самый короткий
const togglePlay = () => {
  // сразу вычисляем нужный метод в зависимости от текущего состояния
  video[video.paused ? 'play' : 'pause']();
};

// 2 - изменение иконки запуска/паузы
const updateButton = () => {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
};

// 3 - кнопки перемотки назад/вперёд
const skipButtonClickHandler = (evt) => {
  // увеличиваем время на значение дата-атрибута нажатой кнопки
  video.currentTime += parseFloat(evt.target.dataset.skip);
};

// 4 - регулировка громкости и скорости
const rangeUpdateHandler = (evt) => {
  // video.volume или video.playbackRate = ...;
  video[evt.target.name] = evt.target.value;
};

// 5 - привязка ширины прогресс-бара к текущему времени
const videoTimeupdateHandler = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

// 6 - перемотка по состоянию прогресс-бара
const progressBarClickHandler = (evt) => {
  video.currentTime = (evt.offsetX / progress.offsetWidth) * video.duration;
};

// 8 - full screen
function fullScreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function fullScreenCancel() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    fullScreenCancel();
  } else {
    fullScreen(player);
  }
};

// Слушаем события
// 1 - запуск/пауза
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
// 2 - изменение иконки запуска/паузы
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// 3 - перемотка назад/вперёд
skipButtons.forEach((skipButton) => {
  skipButton.addEventListener('click', skipButtonClickHandler);
});
// 4 - регулировка громкости/скорости
ranges.forEach((range) => {
  range.addEventListener('change', rangeUpdateHandler);
  range.addEventListener('mousemove', rangeUpdateHandler);
});
// 5 - привязка ширины прогресс-бара к текущему времени
video.addEventListener('timeupdate', videoTimeupdateHandler);
// 6 - перемотка по клику на прогресс-бар
progress.addEventListener('click', progressBarClickHandler);
// 7 - перемотка при перетаскивании прогресс-бара
let mousedown = false;
progress.addEventListener('mousedown', () => {
  mousedown = true;
});
// используется сокращённое логическое вычисление.
// Если mousedown === true, выполнится запуск progressBarClickHandler(evt)
// Если mousedown === false - ничего не выполнится
progress.addEventListener('mousemove', evt => mousedown && progressBarClickHandler(evt));
progress.addEventListener('mouseup', () => {
  mousedown = false;
});
// 8 - fullscreen
const full = document.querySelector('.fullscreen');
full.addEventListener('click', toggleFullScreen);
