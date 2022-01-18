// Inquirer, file system, util packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// App modules
// const generateMarkdown = require('./utils/generateMarkdown.js');

// Question prompts for inquirer
const userQuestions = [
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
        message: 'Provide installation instructions for your project if applicable'
      },
      { // WHEN I enter usage information
        type: 'input',
        name: 'usage-info',
        message: 'Provide instructions and examples for use',
      },
      { // WHEN I enter contribution guidelines
        type: 'input',
        name: 'contribution-guidlines',
        message: 'Provide guidelines for external contribution if applicable',
      },
      { // WHEN I enter test instructions
        type: 'input',
        name: 'test-instructions',
        message: 'Provide instructions for tests if applicable',
      },
      { // WHEN I choose a license for my application from a list of options
        type: 'checkbox',
        name: 'languages',
        message: 'Which license(s) you would like to use (Check all that apply)',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'GNU', 'Mozilla Public License 2.0', 'Unlicense']
      },
      { // WHEN I enter my email address
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      }];



// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponses = await inquirer.prompt(userQuestions)
    console.log(userResponses)
  }
  catch (err) {
    console.log(err)
  }
}

// Function call to initialize app
init();
