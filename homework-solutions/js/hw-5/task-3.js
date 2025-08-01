/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const lowerWord = word.toLowerCase();
const vowelsList = 'aeiouy';
const consonantsList = 'bcdfghjklmnpqrstvwxz';
let vowelsCount = 0;
let consonantsCount = 0;
let vowelsAndConsonantsResult = '';

for (let i = 0; i < lowerWord.length; i++) {
  if (vowelsList.includes(lowerWord[i])) {
    vowelsCount++
  } else if (consonantsList.includes(lowerWord[i])) {
    consonantsCount++
  }
}

vowelsAndConsonantsResult += `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
// console.log(vowelsAndConsonantsResult);
export { vowelsAndConsonantsResult };