const Employee = require('./Employee');

const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Engineer extends Employee {
    constructor(name, id, email, gitHubId, gitHubUsername) {
        super(name, id, email);
     
        this.gitHubId = gitHubId;
        this.gitHubUsername = gitHubUsername;
    }
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;