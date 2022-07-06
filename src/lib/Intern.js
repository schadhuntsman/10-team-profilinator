const Employee = require('./Employee');

const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
     
    }
    getRole() {
        return "Intern";
    }
};
     




module.exports = Intern;