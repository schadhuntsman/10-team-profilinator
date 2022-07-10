const Employee = require('./Employee');

const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        // this.id = id;
        this.school = school;

    }
    getRole() {
        return "Intern";
    }
};
     




module.exports = Intern;