class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  // Method to get the full name of the person
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to check if the person is an adult (age >= 18)
  isAdult() {
    return this.age >= 18;
  }

  // Method to display person details
  displayDetails() {
    console.log(`Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
    console.log(`Adult: ${this.isAdult() ? "Yes" : "No"}`);
  }
}

const person1 = new Person("SOWBARANIKA", "ESWARI", 30, "SOW@example.com");
const person2 = new Person("MUKESH", "RAJ", 16, "MUKESH@example.com");

person1.displayDetails();
console.log("-------------------------");
person2.displayDetails();





