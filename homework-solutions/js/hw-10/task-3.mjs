/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// console.log(Math.round(getRandomArbitrary(0, 10)))

function uniqueRandomGenerator(n) {
  // Ваш код
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i)
  }
  let callCount = 0;
  // let usedNumbers = [];
  console.log(numbers);

  return function f1() {
    callCount++
    // console.log(callCount);
    if (callCount > n) {
      return 'All numbers were received';
    }
    let randomIndex = Math.ceil(getRandomArbitrary(0, numbers.length - 1));
    let randomNumber = numbers[randomIndex];

    numbers.splice(randomIndex, 1);
    // console.log(randomNumber);
    // console.log(callCount);
    return randomNumber;
  }
}
const generator = uniqueRandomGenerator(5);

console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator())
console.log(generator())



export { uniqueRandomGenerator };
