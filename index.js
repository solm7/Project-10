//Declare variables
const inquirer = require("inquirer");
const fs = require("fs/promises");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const generateTeamCards = require("./src/templateHTML");

//create array to contain entire team
const company = [];

//Function to add manager to company
addManager((input) => {
  const teamManager = new Manager(
    input.managerOffice,
    input.managerEmail,
    input.managerName,
    input.managerId
  );
  company.push(addManager);
});

//Questions for manager information
const managerInformation = [
  {
    type: "input",
    message: "Enter your name.",
    name: managerName,
  },
  {
    type: "input",
    message: "Enter your emaail.",
    name: managerEmail,
  },
  {
    type: "input",
    message: "Enter employee ID.",
    name: managerId,
  },
];
