// Оригинальный вариант, работает только для чекбоксов, но не для лейблов

let lastCheckBox;
const checkBoxes = document.querySelectorAll('.inbox input[type=checkbox]');

function checkBoxClickHandler(evt) {
  let inBetween = false;

  if (evt.shiftKey && this.checked) {
    checkBoxes.forEach((checkBox) => {
      const check = checkBox;
      if (check === this || check === lastCheckBox) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        check.checked = true;
      }
    });
  }

  lastCheckBox = this; // или evt.target;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', checkBoxClickHandler));
