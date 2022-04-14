const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { type } = require("os");

let managerInfo = "";
let internInfo = "";
let engineerInfo = "";
let engHolder = [];
let interHolder = [];
let mangHolder = "";
let engCard = "";
let internCard = "";

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
        name: "id",
      },
      {
        type: "input",
        message: "Please enter your email: ",
        name: "email",
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
        data.id,
        data.email,
        data.officeNumber,
        emplAdd()
      );
    });
}
function newEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter Engineer name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter Engineer ID: ",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter Engineer email: ",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter Engineer GitHub: ",
        name: "github",
      },
    ])
    .then(function (data) {
      engineerInfo = new Engineer(data.name, data.id, data.email, data.github);
      emplAdd();
    });
}
function internQuestion() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter intern name: ",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter intern  ID number: ",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter intern email: ",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter intern school name: ",
        name: "school",
      },
    ])
    .then(function (data) {
      internInfo = new Intern(data.name, data.id, data.email, data.school);
      interHolder.push(internInfo);
      console.log(internInfo);
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
  </html>
  <section class = "row">`;

  let managerCard = `<div class="card col m-3" style="width: 12rem;">
  <div class="card-body">
    <h2>${managerInfo.name}</h2>
    <h5 class="card-title">Manager</h5>
    <p class="card-text">Office Number: ${managerInfo.officeNumber}</p>
    <p class="card-text">Manager ID: ${managerInfo.id}</p>
    <a href="mailto:${managerInfo.email}" class="card-link">Email</a>
  </div>
</div>`;
  // for (let i = 0; i < engineerInfo.length; i++) {
  engCard = `<div class="card col m-3" style="width: 12rem;">
  <div class="card-body">
    <h2>${engineerInfo.name}</h2>
    <h5 class="card-title">Engineer</h5>
    <p class="card-text">GitHub: ${engineerInfo.github}</p>
    <p class="card-text">Engineer ID: ${engineerInfo.id}</p>
    <a href="mailto:${engineerInfo.email}" class="card-link">Email</a>
  </div>
</div>`;
  // }
  // for (let i = 0; i < internInfo.length; i++) {
  internCard = `<div class="card col m-3" style="width: 12rem;">
  <div class="card-body">
    <h2>${internInfo.name}</h2>
    <h5 class="card-title">Intern</h5>
    <p class="card-text">School: ${internInfo.school}</p>
    <p class="card-text">ID Number: ${internInfo.id}</p>
    <a href="mailto:${internInfo.email}" class="card-link">Email</a>
  </div>
</div>`;
  // }
  let htmlPageEnd = `
  <section>
  </main>
  </body>
  </html>`;
  console.log(engCard);
  console.log(internCard);

  let fileContent =
    htmlPageStart + managerCard + engCard + internCard + htmlPageEnd;
  console.log(engCard);
  console.log(internCard);
  fs.writeFile("./dist/index.html", fileContent, function (err) {
    if (err) throw err;
  });
  console.log("Index.html was generated!");
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

function engCardGen() {}
mangQuestions();
