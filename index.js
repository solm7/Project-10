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
const addManager = (input) => {
  const teamManager = new Manager(
    input.managerOffice,
    input.managerEmail,
    input.managerName,
    input.managerId
  );
  company.push(addManager);
};

//Create array of Questions for manager information
const managerInformation = [
  {
    type: "input",
    message: "Enter your name.",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter your email.",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter manager office number.",
    name: "managerOffice",
  },
  {
    type: "input",
    message: "Enter employee ID.",
    name: "managerId",
  },
];

//Ask Manager if they want to add employee, or if they are done pass into inquirer later

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
    name: "internName",
  },
  {
    type: "input",
    message: "Enter your email.",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter place of education.",
    name: "internUniversity",
  },
  {
    type: "input",
    message: "Enter employee ID.",
    name: "internId",
  },
];

//Create Array for Engineer questions to call later in inquirer
const engineerInformation = [
  {
    type: "input",
    message: "Enter your name.",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Enter your email.",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Enter place of education.",
    name: "engineerGitHub",
  },
  {
    type: "input",
    message: "Enter employee ID.",
    name: "engineerId",
  },
];

//Create function to pass Intern questions and store info for team card
const createNewIntern = () => {
  inquirer.prompt(internInformation).then((response) => {
    const teamIntern = new Intern(
      response.internName,
      response.internID,
      response.internGithub,
      response.internEmail
    );
    myTeam.push(teamIntern);
    buildCompany();
  });
};
//Create function to pass Engineer questions and store info for team card
const createNewEngineer = () => {
  inquirer.prompt(engineerInformation).then((response) => {
    const teamEngineer = new Engineer(
      response.internName,
      response.internID,
      response.internGithub,
      response.internEmail
    );
    myTeam.push(teamEngineer);
    buildCompany();
  });
};

const addToCompany = () => {
  inquirer.prompt(teamBuildQuestions).then((answers) => {
    switch (answers.selection) {
      case "Intern":
        createNewIntern();
      case "Engineer":
        createNewEngineer();
      case "Nothing else to add":
        createTeamCard("./dist/index.html", generateTeamCards(company));
        break;
    }
  });
};

// Write File to Dist folder
function createTeamCard(fileName, data) {
  fs.writeFile(fileName, data);
}
