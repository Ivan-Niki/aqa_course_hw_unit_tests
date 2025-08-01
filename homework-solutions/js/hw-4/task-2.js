/*

Работа с оператором IF:

  1. Создать переменную "minAge" и присвоить ей значение 18
  2. Создать переменную "maxAge" и присвоить ей значение 60
  3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
  4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
  4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
    - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
    - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
    - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
    - Иначе выводите "Technical work".
  5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

  */

// 1. Создать переменную "minAge" и присвоить ей значение 18.
let minAge = 18;

// 2. Создать переменную "maxAge" и присвоить ей значение 60.
let maxAge = 60;

// 3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы.
let age;

// age = 10;
age = 17;
// age = 18;
// age = 19;
// age = 59;
// age = 60;
// age = 61;

// 4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type.
if (typeof age != "number") {
  console.log("Incorrect data type");
}

// console.log(typeof age);

/* 5. Создать if в котором будете проверять весь код переменной age со следующими условиями:
- Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then";
- Если "age" больше либо равно minAge и меньше maxAge, вывести в консоль "Welcome  !";
- Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel";
- Иначе выводите "Technical work".  */

if (age < minAge) {
  console.log("You don't have access cause your age is " + age + ". It's less then");
} else if (age >= minAge && age < maxAge) {
  console.log("Welcome  !");
} else if (age > maxAge) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}

// 6. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61.

/* Решение:
Присваиваем поочередно значения для переменной age в задании № 3 (см. выше) и смотрим, 
как отрабатывает наше условное ветвление.
*/