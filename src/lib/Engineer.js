const Employee = require('./Employee');

const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
     
    }
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;