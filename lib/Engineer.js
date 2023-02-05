// Import engineer class
const Employee = require("./Employee");

// Engineer function 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }    
}

module.exports = Engineer;