import '../styles/styles.css'

if (module.hot) {
  module.hot.accept()
}

/* Lesson example code below this line */
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
      console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    };
  }
}

let john = new Person("John Doe", "blue");
john.greet();

let jane = new Person("Jane Smith", "green");
jane.greet();