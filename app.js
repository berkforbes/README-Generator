// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');

// WHEN I am prompted for information about my application repository
const promptUser = () => {
    return inquirer.prompt([
      { // WHEN I enter my project title
        type: 'input',
        name: 'project-title',
        message: 'What is the title of your project? (Required)',
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
      },
      { // WHEN I enter a description
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
      },
      { // WHEN I enter installation instructions
        type: 'input',
        name: 'install-instructions',
        message: 'Provide installation instructions for your project'
      },
      { // WHEN I enter usage information
        type: 'input',
        name: 'usage-info',
        message: 'Provide instructions and examples for use',
      },
      { // WHEN I enter contribution guidelines
        type: 'input',
        name: 'contribution-guidlines',
        message: 'Provide guidelines for external contribution',
      },
      { // WHEN I enter test instructions
        type: 'input',
        name: 'test-instructions',
        message: 'Provide instructions for tests',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      { // WHEN I choose a license for my application from a list of options
        type: 'checkbox',
        name: 'languages',
        message: 'Choose which license(s) you would like to use (Check all that apply)',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'GNU', 'Mozilla Public License 2.0', 'Unlicense']
      },
      { // WHEN I enter my GitHub username
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      { // WHEN I enter my email address
        type: 'input',
        name: 'about',
        message: 'Enter your email address',
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };

  promptUser();

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const {writeFile, copyFile} = require('./utils/generatemarkdown.js')




// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
