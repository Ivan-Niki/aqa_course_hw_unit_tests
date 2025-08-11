/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(num) {
  // Ваш код
  // Суммирование:
  let numString = num.toString();
  let result = 0;
  if (numString.length === 0) {
    return +numString;
  } else {
    result += +numString[0] + digitalRoot(numString.slice(1))
  }

  // Возврат (return) в зависимости от длины получившегося числа (которое лежит в строке result)
  if (result.toString().length === 1) {
    return result
  } else {
    return digitalRoot(result)
  }
}

// console.log(digitalRoot(8976856784));
export { digitalRoot };
