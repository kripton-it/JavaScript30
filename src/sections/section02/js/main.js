const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const now = new Date();
let seconds = now.getSeconds();
let mins = now.getMinutes();
let hours = now.getHours();

function setDate() {
  seconds += 1;
  mins += 1 / 60;
  hours += 1 / 3600;
  // const now = new Date();

  // const seconds = now.getSeconds();
  const secondsToDegrees = 360 * (seconds / 60) + 90;
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  // const mins = now.getMinutes();
  // const minsToDegrees = 360 * (mins / 60) + 90;
  const minsToDegrees = 360 * (mins / 60) + 90 + 360 * (seconds / 3600);
  minHand.style.transform = `rotate(${minsToDegrees}deg)`;

  // const hours = now.getHours();
  // const hoursToDegrees = 360 * (hours / 12) + 90;
  const hoursToDegrees = 360 * (hours / 12) + 90 + 360 * (mins / 720) + 360 * (seconds / 43200);
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);
