/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function countVowels(word) {
  let count = 0;
  let vowels = 'aeiou';
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++
    }
  }
  return count
}
// console.log(countVowels('umbrella'));

function sortedByVowels(wordsArr) {
  // Ваш код
  let sortedArr = wordsArr.toSorted((a, b) => {
    return countVowels(a) - countVowels(b)
  });
  return sortedArr;
}

// console.log(sortedByVowels(words));
export { sortedByVowels };
