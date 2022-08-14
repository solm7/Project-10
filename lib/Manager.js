// Parent class of Intern, Employee, and Engineer classes
class Manager {
    
  // Constructor takes in name, id and email
  constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
  }

  // getName, getID, getEmail & getRole Methods
  getName(){
      return this.name;
  }

  getId(){
      return this.id;
  }

  getEmail(){
      return this.email;
  }

  getRole(){
      return 'Manager';
  }
}

//exports class for use elsewhere
module.exports = Manager;