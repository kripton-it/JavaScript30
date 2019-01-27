const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

const paragraph = document.querySelector('p');

function pClickHandler() {
  paragraph.classList.toggle('green');
}
paragraph.addEventListener('click', pClickHandler);

/*
Чтобы увидеть, какой код соответствует изменению атрибутов DOM-элемента:
1 Открыть инспектор, вкладка Elements
2 Выбрать нужный элемент
3 В DOM-дереве на нужном элементе в контекстном меню: Break on -> attribute modifications
4 Добавится брейкпойнт, и при любом изменении атрибутов элемента
произойдёт переход в дебаггер с указанием на нужную строку кода
*/

// 1 Regular
const str1 = 'Hello';
console.log('1: ', str1);

// 2 Interpolated
// %s - для строки. Для других типов - другие обозначения (http://css.yoksel.ru/funny-little-console/)
const str2 = '\u{1F4A9}';
console.log('2: Hello, I am a %s string', str2);

// 3 Styled
const str3 = 'styled';
const style3 = 'color: red; font-size: 24px; background-color: yellow;';
console.log(`%c 3: ${str3}`, style3);

// 4 warning!
const str4 = 'Warning';
console.warn('4: ', str4);

// 5 Error :|
const str5 = 'Error';
console.error('5: ', str5);

// 6 Info
const str6 = 'Info';
console.info('6: ', str6);

// 7 Testing

// console.assert(1 === 2, str5); - выбросит ошибку
console.assert(str1 !== str3, str5); // не выбросит ошибку

// 8 clearing
// очистка консоли
// console.clear();

// 9 Viewing DOM Elements
// вывод всей информации об объекте - свойства, методы, прототип - с помощью console.dir
console.log('9: ', paragraph);
console.dir(paragraph);

// 10 Grouping together
console.log('10: ');
dogs.forEach((dog) => {
  // начинаем группировку
  console.group(`%c ${dog.name}`, style3);
  // или console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  // заканчиваем группировку
  console.groupEnd(`${dog.name}`);
});

// 11 counting
console.log('11: ');
console.count('Hello');
console.count('Hello');
console.count('By');
console.count('Hello');
console.count('Hello');
console.count('Hello');
console.count('By');

// 12 timing
console.log('12: ');
// запускаем таймер
console.time('fetch');
fetch('https://api.github.com/users/wesbos').then(data => data.json()).then((data) => {
  // останавливаем таймер
  console.timeEnd('fetch');
  console.log(data);

  // 13 table
  // внутри 12-го, так как оно асинхронно
  console.log('13: ');
  console.table(dogs);
});
