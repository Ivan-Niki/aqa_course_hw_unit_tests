class Employee {
  // Ваш код
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || this.checkLetters(value) === false || value.length < 2 || value.length > 50) throw new Error('Incorrect firstname input')
    this._firstName = value;
  }

  checkLetters(str) {
    const latinLetters = 'abcdefghijklmnopqrstuvwxyz';
    let result = true;
    for (let i = 0; i < str.length; i++) {
      if (!(latinLetters.includes(str[i].toLowerCase()))) {
        result = false;
        break;
      }
    }
    return result;
  }

  checkLettersWithSpace(str) {
    const latinLetters = 'abcdefghijklmnopqrstuvwxyz ';
    let result = true;
    for (let i = 0; i < str.length; i++) {
      if (!(latinLetters.includes(str[i].toLowerCase()))) {
        result = false;
        break;
      }
    }
    return result;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || this.checkLetters(value) === false || value.length < 2 || value.length > 50) throw new Error('Incorrect lastName input')
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || this.checkLettersWithSpace(value) === false || value === "" || value.trim() === "") throw new Error('Incorrect profession input')
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value <= 0 || value >= 10000 || typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('Invalid salary input')
    }
    this.#salary = value;
  }

  getFullName(firstName, lastName) {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ==================================================================
class Company {
  // Ваш код
  #employees = [];

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee is not instance of class Employee')
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  // 1. Реализуйте метод `findEmployeeByName(firstName: string)` в классе Company, который возвращает объект сотрудника, если такой найден, иначе ошибка.
  findEmployeeByName(firstName) {
    const findedEmp = this.#employees.find((emp) => emp._firstName === firstName)
    if (!findedEmp || typeof firstName !== 'string') throw new Error('employee not found')
    return findedEmp;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp._firstName === firstName)
  }

  // 2. Реализуйте метод `removeEmployee(firstName)` в классе Company, который удаляет сотрудника по имени.
  //  Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
  //  Для корретной работы создайте дополнительно приватный метод`getEmployeeIndex(firstName)`, и используйте его в`removeEmployee`

  removeEmployee(firstName) {
    const empIndex = this.#getEmployeeIndex(firstName);
    if (empIndex === -1) throw new Error('employee is not presented in this company')
    this.#employees.splice(empIndex, 1)
  }

  // 3. Добавьте метод `getTotalSalary()` в классе Company, который возвращает сумму всех зарплат сотрудников.
  getTotalSalary() {
    return this.#employees.reduce((acc, emp) => acc + emp.salary, 0)
  }

}


// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// const emp3 = new Employee('Michael', 'Brown', 'Designer', 2347);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(company.getEmployees());
// console.log(company.findEmployeeByName('Barbara'));

// console.log('total salary of all employyes: ', company.getTotalSalary());


// ------------------------
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
console.log(company.getEmployees()); // [Employee, Employee, Employee]
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
