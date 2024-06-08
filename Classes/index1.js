class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  gender = "female"; //overwrites the value of parent constructor
  name = "max1";
  age = 22;

  printName = () => {
    //using arrow function, we don't need constructor and also "this" variable to represent variables
    console.log(this.gender, this.name);
  };
  printAge = () => {
    console.log(this.age);
  };
}

const person = new Person();

person.printGender();
person.printName();
person.printAge();
