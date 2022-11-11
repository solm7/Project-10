// Dependency to parent class
const Manager = require('./Manager.js');

// Create Engineer sub-class
class Intern extends Manager {
    constructor(name, id, university, email) {
        
        // Pass arguments to parent class
        super(name, id, email);

        // Declare new variable only found in this sub-class
        this.university = university;
    }
    
    // Declare new Method exclusive to this sub-class
    getUniversity(){
        return this.university;
    }

    // Use getRole() function to return this class's name
    getRole(){
        return 'Intern';
    }
}

//exports class for use elsewhere
module.exports = Intern;