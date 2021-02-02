// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const list = [
    {
        type:'input',
        message: 'What is the name of the repo',
        name:'title'
    },
    {
        type: 'input',
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
        name: 'repoName'
    },
    {
        type: 'input',
        message: 'Write a short discription',
        name: 'discription'
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
        name: "license"
    },
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

]
// TODO: Create a function to write README file
function writeToFile(list, data) {
    fs.writeFile(list, JSON.stringify(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(list).then(function (data) {
        writeToFile('README.md', generateMarkdown({ data }));
    })
}

// Function call to initialize app
init();
