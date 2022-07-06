
const fs = require('fs')
const inquirer = require('inquirer');


//name id email getName() getId() getEmail() getRole() 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    return "Employee";
}
   
     
};

module.exports = Employee;