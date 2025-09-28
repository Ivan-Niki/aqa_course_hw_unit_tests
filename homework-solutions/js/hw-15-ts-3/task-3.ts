/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
    for (let key in obj) {
        if (obj[key] === value) return key;
    }
    return undefined;
}

const car345 = {
    id: 345,
    make: "Audi",
    model: "A6",
    color: "white",
    year: 2020,
    price: "18000$"
};

console.log(getKeyByValue(car345, 345));       // id
console.log(getKeyByValue(car345, "18000$"));  // price
console.log(getKeyByValue(car345, "Audi"));    // make
console.log(getKeyByValue(car345, "white"));   // color
console.log(getKeyByValue(car345, "hello"));   // undefined

