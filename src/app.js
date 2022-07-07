const fs = require('fs')
const inquirer = require('inquirer');
const infoSave = [];
//generate html 
//use bootstrap for html

const template = require('../src/template');
const path = require('path');

const Manager = require('../src/lib/Manager');
// const Employee = require('../lib/Employee');
const Engineer = require('../src/lib/Engineer');
const Intern = require('../src/lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teamPrint.html")


const managerPrompt = () => {
  
  return inquirer.prompt([
      
        {
          type: 'input',
          name: 'name',
          message: "Enter manager's name", 
          validate: name => {
            if (name) {
              return true;
            } else {
              console.log("Enter manager's name");
              return false;
            }
          }           
        },
        {
          type: 'input',
          name: 'employeeId',
          message: "Enter manager's ID", 
          validate: employeeId => {
            if (employeeId) {
              return true;
            } else {
              console.log("Enter manager's ID");
              return false;
            }
          }           
        },
        {
          type: 'input',
          name: 'email',
          message: "Enter manager's e-mail address", 
          validate: email => {
            if (email) {
              return true;
            } else {
              console.log("Enter manager's e-mail address");
              return false;
            }
          }           
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "Enter manager's office number", 
          validate: officeNumber => {
            if (officeNumber) {
              return true;
            } else {
              console.log("Enter manager's office number");
              return false;
            }
          }         
        },   
      ])

      .then(answers =>  {
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      infoSave.push(manager);

      selectionMenu();

      })
    };

const selectionMenu = () => {
  return inquirer.prompt([
    {
    type: 'list',
    name: 'home',
    message: 'Select one of the following choices to continue:',
    choices: ['add an engineer', 'add an intern', 'finish building your team']
  }])
 .then(makeDecision => {
  switch (makeDecision.home) {
    case "add an engineer":
    engineerSelection();

    case "add an intern":
      internSelection();

    case "finish building your team":
      teamSelection();

  }
 });
};



const engineerSelection = () => {
  console.log(`
  ADD A NEW ENGINEER
  `);

return inquirer.prompt([
  {
  type: 'input',
  name: 'name',
  message: 'Enter the name of the engineer',
  validate: nameEngineer => {
    if (nameEngineer) {
      return true;
    } else {
      console.log("Enter the name of the engineer");
      return false;
    }
  }         
  },
  {
  type: 'input',
  name: 'id',
  message: 'Enter id number',
  validate: employeeId => {
    if (employeeId) {
      return true;
    } else {
      console.log("Enter id number");
      return false;
    }
  }         
  },
  {
  type: 'input',
  name: 'email',
  message: 'Enter your email address',
  validate: email => {
    if (email) {
      return true;
    } else {
      console.log("Enter your email address");
      return false;
    }
  }         
  },
  {
    type: 'input',
    name: 'gitHubId',
    message: 'Enter your GitHub ID',
    validate: gitHubId => {
      if (gitHubId) {
        return true;
      } else {
        console.log("Enter your GitHub ID");
        return false;
      }
    }         
    },
    {
      type: 'input',
      name: 'gitHubUsername',
      message: 'Enter your GitHub username',
      validate: gitHubUsername => {
        if (gitHubUsername) {
          return true;
        } else {
          console.log("Enter your GitHub username");
          return false;
        }
      }         
      },   
]).then(answers => {
  const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHubId, answers.gitHubUsername);
  infoSave.push(engineer);

  selectionMenu();

})
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
  message: 'Enter the name of the intern',
  validate: nameIntern => {
    if (nameIntern) {
      return true;
    } else {
      console.log("Enter the name of the intern");
      return false;
    }
  }         
  },
  {
  type: 'input',
  name: 'id',
  message: 'Enter id number',
  validate: employeeId => {
    if (employeeId) {
      return true;
    } else {
      console.log("Enter id number");
      return false;
    }
  }         
  },
  {
  type: 'input',
  name: 'email',
  message: 'Enter your email address',
  validate: email => {
    if (email) {
      return true;
    } else {
      console.log("Enter your email address");
      return false;
    }
  }         
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter the name of your school',
    validate: school => {
      if (school) {
        return true;
      } else {
        console.log("Enter the name of your school");
        return false;
      }
    }         
    }

]).then(answers => {
  const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
  infoSave.push(intern);

  selectionMenu();

})
};
const teamSelection = () => {
  console.log(`
 FINISH BUILDING YOUR TEAM
  `);
  
  if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, template(infoSave), "utf-8");

}

managerPrompt();

//enter prompt that immediately asks for manager, employed ID, etc

