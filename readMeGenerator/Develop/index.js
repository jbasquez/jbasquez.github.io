// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:'input',
        message: 'What is your github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'reponame'
    },
    {
        type: 'input',
        message: 'Write a short discription',
        name: 'discritption'
    },
    // {
    //     type: 'list',
    //     message: 'What kind of license should your project have?',
    //     choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
    // },
    {
        type: 'input',
        message: 'What is version is needed for instaltation',
        name: 'instilation'
    },
    {
        type: 'input',
        message: 'Is this ready for deployment: yes/no?',
        name: 'ready'
    },

]).then(response => {
    const filename = '${response.name.toLowerCase()}.json';
   
    
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
