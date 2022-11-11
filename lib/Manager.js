//Require Employee Parent Class
const Employee = require("./Employee");

// Create Engineer sub-class
class Manager extends Employee {
  constructor(name, id, email) {
    // Pass arguments to parent class
    super(name, id, email);
    // Get Office number for Manager
    this.officeNumber = officeNumber;
  }

  // Use getRole() function to return this class's name
  getRole() {
    return "Manager";
  }
}

//exports class for use elsewhere
module.exports = Manager;
