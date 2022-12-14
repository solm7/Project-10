// Include dependency to parent class
const Employee = require("./Employee");

// Create Engineer sub-class
class Engineer extends Employee {
  constructor(name, id, github, email) {
    // Pass arguments to parent class
    super(name, id, email);

    // Declare new variable only found in this sub-class
    this.github = github;
  }

  // Method for this subclass
  getGithub() {
    return this.github;
  }

  // Use getRole() function to return this class's name
  getRole() {
    return "Engineer";
  }
}

//exports class for use elsewhere
module.exports = Engineer;
