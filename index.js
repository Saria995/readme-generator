//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [

    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your Full Name?",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
    {
        type: "input",
        name: "title",
        message: "What is the Title of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of your project",
    },
    {
        type: "checkbox",
        name: "tableOfContents",
        message: "Select the sections you want to include in the Table of Contents",
        choices: [
            "Installation",
            "Usuage",
            "License",
            "Contributing",
            "Tests",
            "Licence"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions for Installtion?",
    },
    {
        type: "input",
        name: "usage",
        message: "What languages/technologies were used in this project?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select the license applicable to this project.",
        choices: [
            "MIT",
            "ISC",
            "MS-PL",
            "LGPL",
            "None"

        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "List any contributors (Use GitHub Usernames).",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Give walkthrough of tests required, if applicable.",
    },

];
  

// Function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully created ${fileName}`);
        }
    });
}


//Function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((answers) => {
        writeToFile("README.md", answers);
    });
}

// Function call to initialize app
init();
