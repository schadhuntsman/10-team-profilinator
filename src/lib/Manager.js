const Employee = require('../lib/Employee');

const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
     
        this.officeNumber =officeNumber;
    }

        getRole() {
    return "Manager";
}
getOfficeNumber() {
    return this.officeNumber;
}
     
};

module.exports = Manager;