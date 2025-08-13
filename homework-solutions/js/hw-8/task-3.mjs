/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  // Ваш код
  let sortedArr = numbers.toSorted((a, b) => a - b)
  if (sortedArr[0] !== 1) {
    return 1
  }

  let num = sortedArr.find((elem, i, array) => {
    if ((array[i] - array[i - 1]) > 1) {
      return array[i]
    }
  })
  if (!num) {
    return (sortedArr.length + 1);
  }
  return (num - 1);
}

// console.log(findMissingNumber([5, 2, 7, 3, 8, 1, 6]));

export { findMissingNumber };
