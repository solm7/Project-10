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

//Create array of Questions for manager information
const managerInformation = [
  {
    type: "input",
    message: "Enter your name.",
    name: managerName,
  },
  {
    type: "input",
    message: "Enter your email.",
    name: managerEmail,
  },
  {
    type: "input",
    message: "Enter manager office number.",
    name: managerOffice,
  },
  {
    type: "input",
    message: "Enter employee ID.",
    name: managerId,
  },
];

//Ask Manager if they want to add employee, or if they are done

const teamBuildQuestions = [
  {
    type: "list",
    message: "Do you want to add any employees?",
    name: "Available choices",
    choices: ["Intern", "Engineer", "I don't want to hire anyone"],
  },
];

//Create Array for Intern questions to call later in inquirer
const internInformation = [
  {
    type: "input",
    message: "Enter your name.",
    name: internName,
  },
  {
    type: "input",
    message: "Enter your email.",
    name: internEmail,
  },
  {
    type: "input",
    message: "Enter place of education.",
    name: internUniversity,
  },
  {
    type: "input",
    message: "Enter employee ID.",
    name: internId,
  },
];
