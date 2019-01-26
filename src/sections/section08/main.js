const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// флаг: рисуем или нет
let isDrawing = false;
const startPoint = {
  x: 0,
  y: 0,
};
const initialHue = 0;
const initialLineWidth = 1;
let hue = initialHue;
let direction = true;

ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = initialLineWidth;
// blend-mode - множество вариантов
// ctx.globalCompositeOperation = 'multiply';

function draw(evt) {
  // если не рисуем - ничего не делаем
  if (!isDrawing) return;
  // если рисуем, то
  // вычисляем цвет
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // начинаем рисовать
  ctx.beginPath();
  // от точки
  ctx.moveTo(startPoint.x, startPoint.y);
  // до точки
  ctx.lineTo(evt.offsetX, evt.offsetY);
  ctx.stroke();
  // переставляем стартовую точку
  [startPoint.x, startPoint.y] = [evt.offsetX, evt.offsetY];
  // меняем оттенок
  hue += 1;
  if (hue >= 360) {
    hue = 0;
  }
  // меняем толщину
  ctx.lineWidth = direction ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
  // меняем направление изменения толщины
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
}

canvas.addEventListener('mousemove', draw);
// при нажатии на мышь
canvas.addEventListener('mousedown', (evt) => {
  // включаем режим рисования
  isDrawing = true;
  // переставляем стартовую точку
  [startPoint.x, startPoint.y] = [evt.offsetX, evt.offsetY];
  // сбрасываем толщину и оттенок в начальные значения
  ctx.lineWidth = initialLineWidth;
  hue = initialHue;
});
// выключаем режим рисования
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});
