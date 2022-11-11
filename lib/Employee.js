// Parent class
class Employee {
  // Create Constructor that takes in name, id and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // getName, getID, getEmail & getRole Methods
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getName() {
    return this.name;
  }

  getRole() {
    return "Employee";
  }
}

//exports class for use elsewhere
module.exports = Employee;
