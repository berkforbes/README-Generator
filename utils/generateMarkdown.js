const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributions)
  - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}

  ## Contributing
  ${data.contributions}

  ## Test
  ${data.tests}

  ## Questions
  If you have questions about this project please contact me at ${data.email}
  Check out more of my projects at https://github.com/${data.github}
  `
}

module.exports = generateMarkdown;