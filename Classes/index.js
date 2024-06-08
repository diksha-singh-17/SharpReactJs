class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.gender = "female"; //overwrites the value of parent constructor
    this.name = "max";
    this.age = 22;
  }
  printName() {
    console.log(this.gender, this.name);
  }
  printAge() {
    console.log(this.age);
  }
}

const person = new Person();

person.printGender();
person.printName();
person.printAge();
