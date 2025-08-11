/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrs) {
  // Ваш код
  let result = [];
  for (let arr of arrs) {
    result.push(...arr)
  }
  return result;
}

// console.log(mergeArrays([1, 2], [3, 4], [5, 6], [15, 16]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  // Ваш код
  let lowerSentence = sentence.toLowerCase();
  let wordsArr = lowerSentence.split(" ");
  let resultArr = [];
  let trimmedWordsArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] !== "") {
      trimmedWordsArr.push(wordsArr[i])
    }
  }

  for (let i = 0; i < trimmedWordsArr.length; i++) {
    if (i === 0) {
      resultArr.push(trimmedWordsArr[i])
    } else {
      resultArr.push(trimmedWordsArr[i][0].toUpperCase() + trimmedWordsArr[i].slice(1))
    }
  }
  return resultArr.join("_")
}

// console.log(devideBy("The origin   of the Olympic     Games was in  Greece"));
// console.log(devideBy("I am    super     engineer"));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  // Ваш код
  let fibArr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fibArr.push(0);
    } else if (i === 1) {
      fibArr.push(1);
    } else {
      fibArr.push((fibArr[i - 1] + fibArr[i - 2]))
    }
  }
  return fibArr[n];
}

// fibonacci(8);
// console.log(fibonacci(8));
export { mergeArrays, fibonacci, devideBy };
