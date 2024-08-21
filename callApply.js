const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount, tax, tips) {
    this.salary = this.salary - amount - tax - tips;
    return this.salary;
  },
};
//console.log(normalPerson);
//console.log(normalPerson.firstName);
normalPerson.chargeBill(150, 20, 30);
console.log(normalPerson.salary);

const herePerson = {
  firstName: "Hero",
  lastName: "Alam",
  salary: 25000,
};

const friendlyPerson = {
  firstName: "kamal",
  lastName: "Mia",
  salary: 35000,
};
/////////////// 1st Process (bind)//////////////////
// const heroChargeBill = normalPerson.chargeBill.bind(herePerson);
// heroChargeBill(5000);
// console.log(herePerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);
// console.log(friendlyPerson.salary);

///////////// 2nd Process (call)///////////////////

// normalPerson.chargeBill.call(herePerson, 1000, 500, 300);
// console.log(herePerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 3000, 400, 450);
// console.log(friendlyPerson.salary);

//////// 3rd process (Apply) ///////////////

normalPerson.chargeBill.apply(herePerson, [500, 300, 50]);
console.log(herePerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [2000, 800, 400]);
console.log(friendlyPerson.salary);
