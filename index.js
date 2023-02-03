// Import npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const ??? = require('???');

// Import classes


inquirer
    .prompt([
        {
            type: 'list',
            name: 'team-member',
            message: 'Select your job description.',
            choices: ['Manager', 'Engineer', 'Intern'],
        },


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


        {
            type: 'list',
            name: 'license',
            message: 'Choose your license for your project',
            choices: ['MIT', 'BSD3', 'LGPL', 'Apache', 'Other', 'None']
        },
    ])


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team





// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

inquirer
    .prompt([
    
        {
            type: 'input',
            name: 'name-engineer',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'id-engineer',
            message: 'What is the engineers employee ID?'
        },
        {
            type: 'input',
            name: 'email-engineer',
            message: 'What is the engineers email?'
        },
        {
            type: 'input',
            name: 'github-engineer',
            message: 'What is the engineers github?'
        },

    ])





// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

inquirer
    .prompt([
    
        {
            type: 'input',
            name: 'name-intern',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id-intern',
            message: 'What is the engineers employee ID?'
        },
        {
            type: 'input',
            name: 'email-intern',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'school-intern',
            message: 'What is the interns school?'
        },

    ])








// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
