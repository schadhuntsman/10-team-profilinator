const Employee = require('./Employee');

const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Manager extends Employee {
    constructor(name, id, officeNumber, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber =officeNumber;
    }
    
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return "Manager";
}
   
     
};

module.exports = Manager;