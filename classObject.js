class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}

const herePerson = new Person("Hero", "Alam", 23000);
console.log(herePerson);
const friendlyPerson = new Person("Kalam", "Mia", 43000);
console.log(friendlyPerson);
