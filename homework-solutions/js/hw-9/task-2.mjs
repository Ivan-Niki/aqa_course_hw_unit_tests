/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if (!('name' in character && 'age' in character && typeof character.name === 'string' && typeof character.age === 'number')) {
    throw new Error('Invalid input')
  } else {
    characters.push(character)
  }
}
// && Object.keys(characters).length === 2
// && typeof character === 'object'
addCharacter({ name: 'Ivan', age: 37 });
console.log(characters);

function getCharacter(name) {
  // Ваш код
  const resultcharacter = characters.find((character) => character.name === name);
  return resultcharacter;
}
// console.log(getCharacter('Barney'));


function getCharactersByAge(minAge) {
  // Ваш код
  if (typeof minAge !== 'number') {
    throw new Error('Invalid input')
  }
  const resultcharacterArr = characters.filter((character) => character.age >= minAge);
  return resultcharacterArr
}
// if (resultcharacterArr.length > 0)
// console.log(getCharactersByAge(39));


function updateCharacter(name, newCharacter) {
  // Ваш код
  let targetChar = getCharacter(name);
  targetChar.name = newCharacter.name;
  targetChar.age = newCharacter.age;
}
// updateCharacter('Fred', { name: 'Tom', age: 21 });
// console.log(characters);

function removeCharacter(name) {
  // Ваш код
  let charIndex = characters.findIndex((character) => character.name === name);
  if (charIndex === -1) {
    throw new Error(`Character is not found`)
  } else {
    characters.splice(charIndex, 1)
  }
}
// removeCharacter('Barney');
// console.log('characters after removing ===> ', characters);


export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
