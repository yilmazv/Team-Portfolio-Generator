const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { type } = require("os");

let managerInfo = "";
let internInfo = [];
let engineerInfo = [];
let engHolder = [];
let interHolder = [];
let mangHolder = [];

function mangQuestions() {
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
        name: "mangEmail",
      },
      {
        type: "input",
        message: "Please enter your Office number: ",
        name: "officeNumber",
      },
    ])
    .then(function (data) {
      managerInfo = new Manager(
        data.name,
        data.mangID,
        data.mangEmail,
        data.officeNumber,
        emplAdd()
      );
    });
}
function newEngineer() {
  const engineer = [
    {
      type: "input",
      message: "Please enter Engineer name: ",
      name: "engName",
    },
    {
      type: "input",
      message: "Please enter Engineer ID: ",
      name: "engID",
    },
    {
      type: "input",
      message: "Please enter Engineer email: ",
      name: "engEmail",
    },
    {
      type: "input",
      message: "Please enter Engineer GitHub: ",
      name: "engGit",
    },
  ];
  inquirer.prompt(engineer).then(function (data) {
    let newEng = new Engineer(
      data.engName,
      data.engID,
      data.engEmail,
      data.endGit
    );
    engineerInfo.push(newEng);
    emplAdd();
  });
}
function internQuestion() {
  const intern = [
    {
      type: "input",
      message: "Please enter intern name: ",
      name: "interName",
    },
    {
      type: "input",
      message: "Please enter intern  ID number: ",
      name: "internID",
    },
    {
      type: "input",
      message: "Please enter intern email: ",
      name: "internEmail",
    },
    {
      type: "input",
      message: "Please enter intern school name: ",
      name: "internSchool",
    },
  ];
  inquirer.prompt(intern).then(function (data) {
    let newInternInfo = new Intern(
      data.internName,
      data.internID,
      data.internEmail,
      data.internSchool
    );
    internInfo.push(newInternInfo);
    emplAdd();
  });
}
function cardGenerator() {
  let htmlPageStart = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <title>Document</title>
    </head>
    <body>
      <center>
        <h1>Team Porfolio</h1>
      </center>
    </body>
  </html>`;
  let managerCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h2>${managerInfo.name}</h2>
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Office Number: ${managerInfo.officeNumber}</p>
    <p class="card-text">Manager ID: ${managerInfo.mangID}</p>
    <a href="mailto:${managerInfo.mangEmail}" class="card-link">Email</a>
  </div>
</div>`;
  let engCard = "";
  for (let i = 0; 1 < engineerInfo.length; i++) {
    engCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h2>${engineerInfo.name}</h2>
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Office Number: ${engineerInfo.officeNumber}</p>
    <p class="card-text">Manager ID: ${engineerInfo.mangID}</p>
    <a href="mailto:${engineerInfo.mangEmail}" class="card-link">Email</a>
  </div>
</div>`;
  }
  let internCard = "";
  for (let i = 0; 1 < internInfo.length; i++) {
    internCard = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h2>${internInfo.name}</h2>
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Office Number: ${internInfo.officeNumber}</p>
    <p class="card-text">Manager ID: ${internInfo.mangID}</p>
    <a href="mailto:${internInfo.mangEmail}" class="card-link">Email</a>
  </div>
</div>`;
  }
  let htmlPageEnd = `
  </main>
  </body>
  </html>`;

  let fileContent =
    htmlPageStart + managerCard + engCard + internCard + htmlPageEnd;
  fs.writeFile("./dist/index.html", fileContent, function (err) {
    if (err) throw err;
  });
  console.log("file created!");
  return fileContent;
}

function emplAdd() {
  inquirer
    .prompt([
      {
        name: "emplAdd",
        message: "Who would you like to add?",
        type: "list",
        choices: ["Engineer", "Intern", "Generate Html Page"],
      },
    ])
    .then((data) => {
      if (data.emplAdd === "Engineer") {
        newEngineer();
        return;
      } else if (data.emplAdd === "Intern") {
        internQuestion();
        return;
      } else if (data.emplAdd == "Generate Html Page") {
        cardGenerator();
      }
    });
}
mangQuestions();
