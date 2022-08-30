const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function createManager() {
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
          console.log("okay, intern");
          break;
        case "No, I don't want to input any more data":
          console.log("okay, no more data");
          break;
      }
    });
  // .then(createEngineer);

  // .then((managerResponses) => {
  //   const createdManager = new Manager(
  //     managerResponses.managerName,
  //     managerResponses.managerID,
  //     managerResponses.managerEmail,
  //     managerResponses.managerOffice
  //   );
  //   console.log(createdManager);
  // });
}

createManager();

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter engineer's name:",
      name: "engineerName",
    },
  ]);
}
