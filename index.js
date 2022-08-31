const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

initAndCreateManager();

function initAndCreateManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter manager's name:",
        name: "managerName",
      },
      {
        type: "input",
        message: "Enter manager's ID:",
        name: "managerID",
      },
      {
        type: "input",
        message: "Enter manager's email:",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Enter manager's office number:",
        name: "managerOffice",
      },
    ])
    .then((responses) => {
      const manager = new Manager(
        responses.managerName,
        responses.managerID,
        responses.managerEmail,
        responses.managerOffice
      );
      team.push(manager);
      console.log(team);
    })
    .then(mainMenu);
}

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Input data for another employee?",
        choices: [
          "Input data for an engineer",
          "Input data for an intern",
          "No, I don't want to input any more data",
        ],
        name: "inputAnother",
      },
    ])
    .then((responses) => {
      switch (responses.inputAnother) {
        case "Input data for an engineer":
          createEngineer();
          break;
        case "Input data for an intern":
          createIntern();
          break;
        case "I'm done inputting employee data":
          console.log("okay, no more data");
          break;
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineer's name:",
        name: "engineerName",
      },
      {
        type: "input",
        message: "Enter engineer's ID:",
        name: "engineerID",
      },
      {
        type: "input",
        message: "Enter engineer's email:",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "Enter engineer's github username:",
        name: "engineerGithub",
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(
        responses.engineerName,
        responses.engineerID,
        responses.engineerEmail,
        responses.engineerGithub
      );
      team.push(engineer);
      console.log(team);
    })
    .then(mainMenu);
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern's name:",
        name: "internName",
      },
      {
        type: "input",
        message: "Enter intern's ID:",
        name: "internID",
      },
      {
        type: "input",
        message: "Enter intern's email:",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Enter intern's school:",
        name: "internSchool",
      },
    ])
    .then((responses) => {
      const intern = new Intern(
        responses.internName,
        responses.internID,
        responses.internEmail,
        responses.internSchool
      );
      team.push(intern);
      console.log(team);
    })
    .then(mainMenu);
}
