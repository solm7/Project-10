// Include dependency to parent class
const Manager = require('./Manager.js');

// Create Intern sub-class
class Intern extends Employee {
    constructor(name, id, office, email) {
        
        // Pass arguments to parent class
        super(name, id, email);
        
        // Declare new variable only found in this sub-class
        this.office = office;
    }
    
    // Declare new Method exclusive to this sub-class
    getGithub(){
        return this.office;
    }

    // Use getRole() function to return this class's name
    getRole(){
        return 'Employee';
    }
}

//exports class for use elsewhere
module.exports = Employee;