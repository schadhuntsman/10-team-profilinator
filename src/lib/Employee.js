
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
    // Show() {
    //     return this.present() + ', their Employee ID number is: ' + this.id;
    // }
    // class Email extends Employee {
    //     constructor(this.id, this.email)
    //     super.Id;
    //     this.id = Id;
    // }
    // Show() {
    //     return this.present() + ', their Employee ID number is: ' + this.id;
    // }
     
};

module.exports = Employee;