/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

// ВАРИАНТ 1:
let evenNumbersResult = '';
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    evenNumbersResult += i;
  }
  else if (i % 2 === 0) {
    evenNumbersResult += `${i}-`;
  }
}
// console.log(evenNumbersResult);

// ВАРИАНТ 2:
// let evenNumbersResult = '';
// for (let i = 10; i >= 0; i--) {
//   if (i % 2 === 0 && i !== 0) {
//     evenNumbersResult += `${i}-`;
//   } else if (i === 0) {
//     evenNumbersResult += i;
//   }
// }
// console.log(evenNumbersResult);

// ВАРИАНТ 3:
// let evenNumbersResult = '';
// for (let i = 10; i >= 0; i -= 2) {
//   if (i === 0) {
//     evenNumbersResult += i;
//   } else {
//     evenNumbersResult += (i + "-");
//   }
// }
// console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
// ВАРИАНT 1:
// smilePatternResult += ':)\n' + ':):)\n' + ':):):)\n' + ':):):):)\n' + ':):):):):)';


// ВАРИАНT 2:
let smileStr = ':)';
for (let i = 1; i <= 5; i++) {
  if (i === 5) {
    smilePatternResult += smileStr.repeat(i)
  } else {
    smilePatternResult += smileStr.repeat(i) + '\n'
  }
}
// console.log(smilePatternResult);


/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

// ВАРИАНТ 1:
// for (let i = 0; i < text.length; i++) {
//   if (text[i] !== " ") {
//     replaceSpacesWithOneResult += text[i];
//   } else {
//     replaceSpacesWithOneResult += "1";
//   }
// }
// console.log(replaceSpacesWithOneResult);

// ВАРИАНТ 2:
replaceSpacesWithOneResult += text.replaceAll(" ", "1");
// console.log(replaceSpacesWithOneResult);


export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
