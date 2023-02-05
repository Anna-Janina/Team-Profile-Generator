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

const renderFunc = require('./src/page.js')
const teamMembers = []
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

function app() {

    function addManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name-manager',
                    message: 'What is the managers name?'
                },
                {
                    type: 'input',
                    name: 'id-manager',
            message: 'What is the managers employee ID?'
        },
        {
            type: 'input',
            name: 'email-manager',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'phone-manager',
            message: 'What is the managers office number?'
        },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.name-manager
            // all other responses like above
        )
        teamMembers.push(manager)
        createTeam()
    })
    }

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
                // run add engineer func
            }
            else if (choice.memberChoice === 'Intern') {
                // run add intern func
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
}



// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team





// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// inquirer
//     .prompt([
    
//         {
//             type: 'input',
//             name: 'name-engineer',
//             message: 'What is the engineers name?'
//         },
//         {
//             type: 'input',
//             name: 'id-engineer',
//             message: 'What is the engineers employee ID?'
//         },
//         {
//             type: 'input',
//             name: 'email-engineer',
//             message: 'What is the engineers email?'
//         },
//         {
//             type: 'input',
//             name: 'github-engineer',
//             message: 'What is the engineers github?'
//         },

//     ])





// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// inquirer
//     .prompt([
    
//         {
//             type: 'input',
//             name: 'name-intern',
//             message: 'What is the interns name?'
//         },
//         {
//             type: 'input',
//             name: 'id-intern',
//             message: 'What is the engineers employee ID?'
//         },
//         {
//             type: 'input',
//             name: 'email-intern',
//             message: 'What is the interns email?'
//         },
//         {
//             type: 'input',
//             name: 'school-intern',
//             message: 'What is the interns school?'
//         },

//     ])




app()

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
