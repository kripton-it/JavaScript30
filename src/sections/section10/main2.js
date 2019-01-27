// Универсальный вариант, работает не только для чекбоксов, но и для лейблов

let lastCheckBox;
const checkBoxes = document.querySelectorAll('.inbox input[type=checkbox]');
const items = document.querySelectorAll('.item');

function itemClickHandler(evt) {
  if (evt.shiftKey && evt.target.tagName === 'LABEL') {
    evt.preventDefault();
  }
  let input;
  switch (evt.target.tagName) {
    case 'INPUT':
      input = evt.target;
      break;
    case 'LABEL':
      input = document.querySelector(`.inbox input[id="${evt.target.htmlFor}"]`);
      if (lastCheckBox) {
        input.checked = !input.checked;
      }
      break;
    default:
      break;
  }

  let inBetween = false;

  if (evt.shiftKey && input.checked) {
    checkBoxes.forEach((checkBox) => {
      const check = checkBox;

      if (check === input || check === lastCheckBox) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        check.checked = true;
      }
    });
  }

  lastCheckBox = input;
}

items.forEach(item => item.addEventListener('click', itemClickHandler));
