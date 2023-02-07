// Import npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const dist_directory = path.resolve(__dirname, 'dist')
const dist_path = path.join(dist_directory, 'team.html')

// Import HTML page
const renderFunc = require('./src/page.js')
const teamMembers = []

// add team members
function app() {

    // add manager function
    function addManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name-manager',
                    message: `What is the manager's name?`
                },
                {
                    type: 'input',
                    name: 'id-manager',
                    message: `What is the manager's employee ID?`
                },
                {
                    type: 'input',
                    name: 'email-manager',
                    message: `What is the manager's email address?`
                },
                {
                    type: 'input',
                    name: 'phone-manager',
                    message: `What is the manager's office number?`
                },
                ])
            .then((answers) => {
                const manager = new Manager(
                    answers.name-manager
                )
                teamMembers.push(manager)
                createTeam()
            })
    };

    // add engineer function
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name-engineer',
                    message: `What is the engineer's name?`
                },
                {
                    type: 'input',
                    name: 'id-engineer',
                    message: `What is the engineer's employee ID?`
                },
                {
                    type: 'input',
                    name: 'email-engineer',
                    message: `What is the engineer's email address?`
                },
                {
                    type: 'input',
                    name: 'github',
                    message: `What is the engineer's github name?`
                },
                ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.name-engineer
                )
                teamMembers.push(engineer)
                createTeam()
            })
    };

    // add engineer function
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name-engineer',
                    message: `What is the engineer's name?`
                },
                {
                    type: 'input',
                    name: 'id-engineer',
                    message: `What is the engineer's employee ID?`
                },
                {
                    type: 'input',
                    name: 'email-engineer',
                    message: `What is the engineer's email address?`
                },
                {
                    type: 'input',
                    name: 'github',
                    message: `What is the engineer's github name?`
                },
                ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.name-engineer
                )
                teamMembers.push(engineer)
                createTeam()
            })
    };

    // add intern function
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name-intern',
                    message: `What is the intern's name?`
                },
                {
                    type: 'input',
                    name: 'id-intern',
                    message: `What is the intern's employee ID?`
                },
                {
                    type: 'input',
                    name: 'email-intern',
                    message: `What is the intern's email address?`
                },
                {
                    type: 'input',
                    name: 'school',
                    message: `What school did the intern go to?`
                },
                ])
            .then((answers) => {
                const intern = new Intern(
                    answers.name-intern
                )
                teamMembers.push(intern)
                createTeam()
            })
    };



    function createTeam() {
        inquirer.prompt([
            {
                type: 'list', 
                name: 'memberChoice',
                message: 'which type of employee are you adding?',
                choices: ['Engineer', 'Intern', "I made a mistake, go back"],
            }
        ])
        .then((choice) => {
            if (choice.memberChoice === 'Engineer') {
                // run add engineer function
            }
            else if (choice.memberChoice === 'Intern') {
                // run add intern function
            } else {
                build()
            }
        })
    }
    function build() {
        if (!fs.existsSync(dist_directory)) {
            fs.mkdirSync(dist_directory)
        }
        fs.writeFileSync(dist_path, renderFunc(teamMembers), 'utf-8')
    }
    
    addManager()
    addEngineer()
    addIntern()
}

app()