// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

console.log('0: original array');
console.table(inventors);
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log('1: Filter the list of inventors for those who were born in the 1500\'s');
const fifteens = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteens);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log('2: Give us an array of the inventors\' first and last names');
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('3: Sort the inventors by birthdate, oldest to youngest');
const ordered = inventors.sort((first, second) => {
  return first.year > second.year ? 1 : -1;
});
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log('4: How many years did all the inventors live?');
const totalYears = inventors.reduce((total, inventor) => total + inventor.passed - inventor.year, 0);
// 0 - начальное значение аккумулятора total
console.log(totalYears);

// 5. Sort the inventors by years lived
console.log('5: Sort the inventors by years lived');
const oldest = inventors.sort((first, second) => {
  return first.passed - first.year > second.passed - second.year ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

console.log('6: create a list of Boulevards in Paris that contain \'de\' anywhere in the name on the page \'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris\'');
// const container = document.querySelector('.mw-category');
/*
const links = container.querySelectorAll('a'); - not an array, but NodeList
const links = [...container.querySelectorAll('a')]; - 1st method - with spread-operator
*/
// const links = Array.from(container.querySelectorAll('a'));
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('7: Sort the people alphabetically by last name');
const alpha = people.sort((first, second) => {
  const [firstSurname, firstName] = first.split(', ');
  const [secondSurname, secondName] = second.split(', ');
  return firstSurname > secondSurname ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

console.log('8: Reduce Exercise');
const result = data.reduce((acc, item) => {
  if (item in acc) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});
console.log(result);
