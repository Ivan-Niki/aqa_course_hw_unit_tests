/* 
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку.
Преобразуйте респонс из JSON в объект.
Проверьте, что айди в респонсе === 201.
Функция должна возвращать полученный объект из респонса.
Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена.
*/

const baseUrl = "https://jsonplaceholder.typicode.com/todos"
async function createTodo(requestBody) {
    try {
        const response = await fetch(baseUrl, {
            method: 'post',
            body: requestBody
        })
        if (response.status !== 201) throw new Error('Status is not 201');
        const responseBody = await response.json();
        console.log(responseBody);
        if (responseBody.id !== 201) {
            throw new Error('id in the responseBody is not 201')
        }
        return responseBody
    } catch {
        console.error(error.message);
    } finally {
        console.log('The final of createTodo function');
    }
}

createTodo({
    "id": 12,
    "title": "qui ullam ratione quibusdam voluptatem",
    "completed": false
}).then((responseBody) => console.log(responseBody));