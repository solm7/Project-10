// Include dependency to parent class
const Manager = require('./Manager.js');

// Create Intern sub-class
class Engineer extends Manager {
    constructor(name, id, github, email) {
        
        // Pass arguments to parent class
        super(name, id, email);

        // Declare new variable only found in this sub-class
        this.github = github;
    }
    
    // Declare new method for this sub-class
    getGithub(){
        return this.github;
    }

    // Use getRole() function to return this class's name
    getRole(){
        return 'Engineer';
    }
}

//exports class for use elsewhere
module.exports = Engineer;