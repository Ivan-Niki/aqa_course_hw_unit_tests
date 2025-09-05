class Employee {
  // Ваш код
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#salary = salary;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(value) {
    this.firstName = value;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName(value) {
    this.lastName = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value < 0 || typeof value !== 'number') {
      throw new Error('Invalid salary input')
    }
    this.#salary = value;
  }

  getFullName(firstName, lastName) {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }
  addProgrammingLanguage(language) {
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }
  increaseTeamSize() {
    this.teamSize += 1
  }
}

class Designer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }
  addDesignTool(tool) {
    this.designTools.push(tool);
  }
}

class Company {
  // Ваш код
}

export { Employee, Company, Designer, Developer, Manager };
