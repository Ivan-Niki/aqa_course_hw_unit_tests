/* Создайте функцию validatePassword, которая принимает строку(пароль) и возвращает true,
если пароль соответствует следующим правилам:
    - Пароль должен содержать хотя бы одну заглавную букву.
    - Пароль должен содержать хотя бы одну букву в нижнем регистре.
    - Пароль должен содержать хотя бы одну цифру.
    - Пароль должен быть не менее 8 символов.
    - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

function validatePassword(password: string): boolean {
    let flag = true;
    // содержит хотя бы одну заглавную букву:
    if (password === password.toLowerCase()) {
        flag = false;
    }
    // содержит хотя бы одну букву в нижнем регистре:
    if (password === password.toUpperCase()) {
        flag = false;
    }
    // содержbn хотя бы одну цифру:
    const digitsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (!(digitsArr.some(digit => password.includes(digit)))) {
        flag = false;
    }
    // должен быть не менее 8 символов:
    if (password.length < 8) {
        flag = false;
    }

    // не должен состоять из одних пробелов:
    if (password.trim() === '') {
        flag = false;
    }
    return flag;
}

console.log('1:', validatePassword('helloworld'));
console.log('2:', validatePassword('helloWorld'));
console.log('3:', validatePassword('HELLOWORLD'));
console.log('3:', validatePassword('HELLO3WORLd'));  // true
console.log('4:', validatePassword('hello4world'));
console.log('5:', validatePassword('hello5World'));  // true
console.log('6:', validatePassword('he6L'));
console.log('7:', validatePassword('         '));
console.log('8:', validatePassword('     helloworld         '));
console.log('9:', validatePassword('    he  llo   wo  rld     '));
console.log('10:', validatePassword('   hello   5 wo r ld   '));
console.log('11:', validatePassword('   hello  3  Wo r ld   '));  // true






