const Person = function (age, height, weight, sex) {
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.sex = sex;
};

Person.prototype.printInfo = function () {
  console.log(`age : ${this.age}`);
  console.log(`height : ${this.height} weight: ${this.weight}`);
  console.log(`sex : ${this.sex}`);
};

const students = new Person(14, 170, 60, "male");
students.printInfo();
