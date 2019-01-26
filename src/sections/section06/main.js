const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// console.log(fetch(endpoint)); // Promise
// fetch(endpoint).then(blob => console.log(blob)); // Response - any content
// fetch(endpoint).then(blob => console.log(blob.json())); // another Promise
// fetch(endpoint).then(blob => blob.json()).then(data => console.log(data)); // array[1000]

// используем спред-оператор ... для добавления в массив элементов массива data по одному
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// функция ищет совпадения
function findMatches(word, array) {
  // 'g' means 'globally', 'i' means 'insensitive'  (глобально, не чувствительно к регистру)
  const regex = new RegExp(word, 'gi');
  // фильтруем по признаку присутствия слова в названии города или штата
  return array.filter(place => place.city.match(regex) || place.state.match(regex));
}

// переводим число в строку с запятыми, разделяющими каждые 3 разряда
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// функция, отображающая результат поиска введённой строки
function displayMatches() {
  // отфильтрованный массив
  const matchArray = findMatches(this.value, cities);
  // создаём массив li из отфильтрованного массива
  const html = matchArray.map((place) => {
    const regex = new RegExp(this.value, 'gi');
    // для подсветки меняем разметку
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    // превращаем массив в строку
  }).join('');
  suggestions.innerHTML = html;
}

function searchInputChangeHandler() {
  displayMatches();
}

function searchInputKeyupHandler() {
  displayMatches();
}

searchInput.addEventListener('change', searchInputChangeHandler);
searchInput.addEventListener('keyup', searchInputKeyupHandler);
