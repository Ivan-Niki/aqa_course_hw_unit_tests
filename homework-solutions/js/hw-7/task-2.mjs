/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
  if (typeof word !== "string") {
    return false
  }
  let reverseWord = word.split("").reverse().join("");
  // console.log(reverseWord);
  if (reverseWord.toLowerCase() === word.toLowerCase()) {
    return true
  } else {
    return false
  }
}
// console.log(isPalindrom("woww"));
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  if (sentence === "" || typeof sentence !== "string") {
    return [];
  }
  let wordsArr = sentence.split(" ");
  let result = [];
  let maxLength = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > maxLength) {
      maxLength = wordsArr[i].length;
    }
  }
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length === maxLength) {
      result.push(wordsArr[i])
    }
  }
  return result
}


// console.log(findLongestWords("The origin of the Olympic Games was in Olympin Greece"));
// console.log(findLongestWords(""))
export { isPalindrom, findLongestWords };
