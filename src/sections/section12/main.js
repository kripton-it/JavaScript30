const pressed = [];
const secretCode = 'kripton';

window.addEventListener('keyup', (evt) => {
  pressed.push(evt.key);
  // оставляем последние n символов
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // if (pressed.join('').includes(secretCode)) - авторский вариант, непонятно зачем
  if (pressed.join('') === secretCode) {
    cornify_add();
  }
});
