const fs = require('fs')
const inquirer = require('inquirer');
const infoSave = [];
//generate html 
//use bootstrap for html

const template = require('./template');
const path = require('path');
const Manager = require('../lib/Manager');
// const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teamPrint.html")


const managerPrompt = () => {
  
  inquirer.prompt([
      
        {
          type: 'input',
          name: 'name',
          message: "Enter manager's name",          
        },
        {
          type: 'input',
          name: 'employeeId',
          message: "Enter manager's ID",          
        },
        {
          type: 'input',
          name: 'email',
          message: "Enter manager's e-mail address",          
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "Enter manager's office number",          
        },   
      ])

      .then(answers) => {
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      infoSave.push(manager);

      selectionMenu();

      };

const selectionMenu = () => {
  return inquirer.prompt([{
    type: 'list',
    name: 'home',
    message: 'Select one of the following choices to continue:',
    choices: ['Engineer', 'Intern', 'Finish building your team']
  }])
 .then(makeDecision => {
  switch (makeDecision.home) {
    case "Would you like to add an engineer?":
    engineerSelection();

    case "Would you like to add an intern?":
      internSelection();

    case "Finish building your team":
      teamSelection();

  }
 });
};

const teamSelection = () => {
  console.log(`
 FINISH BUILDING YOUR TEAM
  `);
  fs.writeDocument(outputPath, template(infoSave), "utf-8");
}
managerPrompt();

const engineerSelection = () => {
  console.log(`
  ADD A NEW ENGINEER
  `);

return inquirer.prompt([
  {
  type: 'input',
  name: 'name',
  message: 'Enter the name of the engineer'
  },
  {
  type: 'input',
  name: 'id',
  message: 'Enter id number'
  },
  {
  type: 'input',
  name: 'email',
  message: 'Enter your email address'
  },
  {
    type: 'input',
    name: 'gitHubId',
    message: 'Enter your GitHub ID'
    },
    {
      type: 'input',
      name: 'gitHubUsername',
      message: 'Enter your GitHub username'
      },   
]).then(answers) => {
  const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHubId, answers.gitHubUsername);
  infoSave.push(engineer);

  selectionMenu();

}
};
//add school for intern

const internSelection = () => {
  console.log(`
  ADD A NEW INTERN
  `);

return inquirer.prompt([
  {
  type: 'input',
  name: 'name',
  message: 'Enter the name of the intern'
  },
  {
  type: 'input',
  name: 'id',
  message: 'Enter id number'
  },
  {
  type: 'input',
  name: 'email',
  message: 'Enter your email address'
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter the name of your school'
    }

]).then(answers) => {
  const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
  infoSave.push(intern);

  selectionMenu();

}
};
module.exports = {
  managerPrompt:managerPrompt

};


managerPrompt();

//enter prompt that immediately asks for manager, employed ID, etc

