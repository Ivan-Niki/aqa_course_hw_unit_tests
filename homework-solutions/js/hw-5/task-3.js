/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const lowerWord = word.toLowerCase();
let vowelsCount = 0;
let consonantsCount = 0;
let vowelsAndConsonantsResult = '';
for (let i = 0; i < lowerWord.length; i++) {
  if (lowerWord[i] === 'a' || lowerWord[i] === 'e' || lowerWord[i] === 'i' || lowerWord[i] === 'o' || lowerWord[i] === 'u' || lowerWord[i] === 'y') {
    vowelsCount++
  } else {
    consonantsCount++
  }
}

vowelsAndConsonantsResult += `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
// console.log(vowelsAndConsonantsResult);
export { vowelsAndConsonantsResult };
