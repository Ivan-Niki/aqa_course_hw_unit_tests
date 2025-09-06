/* 
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом.then и выведите результат его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис.Промис должен реджектаться с "Promise failed". 
Обработайте промис методом.catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число.Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через.then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через.then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch 
*/

// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет 
// отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callbackFunc) {
    setTimeout(callbackFunc, 2000);
}

function sayHi() {
    console.log('Hi from sayHi-Func');
}

delayTwoSeconds(sayHi);

/* 2. Создайте переменную, в которую присвоите новый промис.
Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль. */

const myFirstPromise = new Promise((resolve, reject) => {
    resolve(1);
});

myFirstPromise
    .then(result => console.log(result));

/* 3. Создайте переменную, в которую присвоите новый промис.
Промис должен реджектаться с "Promise failed".
Обработайте промис методом.catch и выведите результат его резолва в консоль */
const mySecondPromise = new Promise((resolve, reject) => {
    reject("Promise failed");
})

mySecondPromise
    .then(result => console.log(result))
    .catch(rej => console.log(rej))

/* 4. Создайте функцию promiseNumber, принимающую на вход число.
Функция должна возвращать промис, резолвающий это число. */
function promiseNumber(num) {
    const myPromise = new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            resolve(num);
        }
        reject(`rejected with ${num}`)
    })
    myPromise
        .then(res => console.log('resolved with result:', res))
        .catch(rej => console.log(rej));

    return myPromise;
}

promiseNumber(32);

/* 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
обработайте его результаты и последовательно выведите в консоль результаты работы каждого 
промиса через.then */

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(resArr => {
        // console.log(resArr)
        resArr.forEach((elem) => console.log(elem))
    })

/* 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then  */

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then((resArr) => {
        resArr.forEach((elem, index) => {
            console.log(`promise ${index + 1} status: `, elem.status);
            console.log(`promise ${index + 1} result: `, elem)
        })
    })

/* 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch */
async function fn5() {
    try {
        const resArr = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        resArr.forEach((elem) => console.log('fn5 promise result: ', elem))
    } catch {
        console.error('fn5_error: ', error.message)
    }
}

async function fn6() {
    try {
        const resArr = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber('bbb')]);
        resArr.forEach((elem, index) => {
            console.log(`fn6 promise ${index + 1} status: `, elem.status);
            console.log(`fn6 promise ${index + 1} result: `, elem)
        })
    } catch {
        console.error('fn6_error: ', error.message)
    }
}


fn5()
fn6()


