// Inquirer, file system, util packages
const fs = require('fs');
const inquirer = require('inquirer');

// App modules
const generateReadme = require('./utils/generateMarkdown.js');

// Question prompts for inquirer
const userQuestions = () => {
  return inquirer.prompt([
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
        name: 'title',
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
        name: 'installation',
        message: 'Provide installation instructions for your project if applicable'
      },
      { // WHEN I enter usage information
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
      },
      { // WHEN I enter contribution guidelines
        type: 'input',
        name: 'contributions',
        message: 'Provide guidelines for external contribution if applicable',
      },
      { // WHEN I enter test instructions
        type: 'input',
        name: 'tests',
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
      }
  ]);
};
  

// TODO: Create a function to write README file
const writeToFile = data => {
  fs.writeFile ('README.md', data, err => {
    if (err) {
      console.log(err)
    }
    else {
      console.log('Your README has been generated. Thanks for using the README-Generator!')
    }
  })
}

// TODO: Create a function to initialize app
userQuestions()
// Get user answers
  .then(userAnswers => {
    return generateReadme(userAnswers);
  })
  .then (data => {
    return writeToFile(data);
  })

// send error if errors
  .catch(err => {
    console.log(err)
  })



