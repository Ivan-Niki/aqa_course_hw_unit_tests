/*
Напишите функцию, реализующую метод массивов map (сам мэп юзать нельзя, надо написать кастомный :).
Функция принимает на вход массив и колбэк. Используйте дженерик типы. 
Затипизировать надо саму функцию и коллбэк.
Создать реализацию функции map, принимающую массив чисел 1 - 5, возвращающую новый массив,
где каждый элемент - это элемент исходного массива умноженный на его индекс

Пример:
map([1, 2, 3, 4, 5], callback) => [0, 2, 6, 12, 20]
*/

type MapCallback<T, U> = (elem: T, index: number, array: T[]) => U;

function customMap<T, U>(array: T[], callbackFn: MapCallback<T, U>): U[] {
    let resultArr: U[] = [];
    for (let i = 0; i < array.length; i++) {
        resultArr.push(callbackFn(array[i], i, array))
    }
    return resultArr;
}

const result = customMap([1, 2, 3, 4, 5], (elem, index) => elem * index);
console.log(result);