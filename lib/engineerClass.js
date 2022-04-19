const Employee = require("./employeeClass");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return "Engineer";
    }
}