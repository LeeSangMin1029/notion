const Person = function (age, height, weight, sex) {
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.sex = sex;
}

const students = new Person(10, 170, 50, "male");
const baby = new Person(1, 40, 3.5, "male");

console.log(Person.prototype === students.__proto__); // true
console.log(Person.prototype === baby.__proto__); // true
console.log(students.__proto__);
