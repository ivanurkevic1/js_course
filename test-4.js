
// создать массив из двух имён
const names = ['Алена','Андрей'];

// вывести в консоль второй элемент
console.log(names[1]);

// добавить один элемент
names.push('Петя');

// найти расположение имени (индекс имени), вывести индекс в консоль
const index = names.indexOf('Алена');
console.log(index);

// осортировать массив sort(), вывести его
names.sort();
console.log(names);

// добавить каждому элементу в начало строки слово Привет, в конец строки "!" и вывести новый массив
const helloNames = names.map(function(name) {
  return 'Привет,' + name + '!';
})
console.log(helloNames);
