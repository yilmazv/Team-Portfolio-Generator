const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let managerInfo = "";
let internInfo = [];
let engineerInfor = [];

let mangQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter manager name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter your id number: ",
        name: "mangID",
      },
      {
        type: "input",
        message: "Please enter your email: ",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter your Office Number: ",
        name: "officeNumber",
      },
    ])
    .then(function (data) {
      managerInfo = new Manager(
        data.name,
        data.mangID,
        data.email,
        data.officeNumber,
        console.log(managerInfo)
      );
    });
};
