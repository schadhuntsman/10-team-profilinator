const fs = require('fs')
const inquirer = require('inquirer');
const infoSave = [];
//generate html 
//use bootstrap for html


const managerPrompt = () => {
  
  inquirer.prompt(
      [
        {
          type: 'input',
          name: 'managerName',
          message: "Enter manager's name",          
        },
        {
          type: 'input',
          name: 'employeeId',
          message: "Enter manager's ID",          
        },
        {
          type: 'input',
          name: 'emailAddress',
          message: "Enter manager's e-mail address",          
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "Enter manager's office number",          
        },   
  ])
}

module.exports = {
  managerPrompt:managerPrompt

};


managerPrompt();

//enter prompt that immediately asks for manager, employed ID, etc

