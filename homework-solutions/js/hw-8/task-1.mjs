/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

// 1. -------------------- forEach --------------------
// присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
let forEach = [];
numbers.forEach((elem) => {
   if (!(elem % 3)) {
      forEach.push(elem);
   }
});
// console.log(forEach);

/* -------------------- 2. map --------------------
присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива
СИНТАКСИС 1:
let map = numbers.map((elem) => {
   return (elem - numbers.length)
});
*/

// СИНТАКСИС 2:
let map = numbers.map(elem => elem - numbers.length);
// console.log(map);

// -------------------- 3. filter --------------------
let filter = numbers.filter((item, i, array) => array[i] > array[i - 1]);
// console.log(filter);

// -------------------- 4. find --------------------
let find = numbers.find((item, i, array) => array[i] === i);
// console.log("find === ", find);

// -------------------- 5. sort --------------------
// отсортируйте массив по возрастанию, не изменив изначальный // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

// Без изменения исходного массива:
let sort = numbers.toSorted((a, b) => {
   return a - b;
});

// С изменением исходного массива:
// let sort = numbers.sort((a, b) => {
//    return a - b;
// });
// console.log("sortedNumbersArr === ", sort);
// console.log("originalArr ===", numbers);


// -------------------- 6. reduce --------------------
// получите сумму всех чисел массива //466
let reduce = numbers.reduce((sum, elem) => sum += elem, 0);
// console.log("sumOfElemsByReduce === ", reduce);

// -------------------- 7. some ----------------------
// проверьте, есть ли в массиве элементы больше 90 //true
let some = numbers.some((elem) => elem > 90);
// console.log("array has numbers > 90 ==> ", some);

// -------------------- 8. every ---------------------
// проверьте, что все элементы массива двухзначные //false
let every = numbers.every((elem) => elem.toString().length === 2);
// console.log("each element is two-digit ==> ", every);


export { forEach, map, filter, find, sort, reduce, some, every };
