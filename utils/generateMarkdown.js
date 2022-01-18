const generateMarkdown = data => {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Credits] (#credits)
  - [License] (#license)
  - [Contributions] (#contributions)
  - [Tests] (#tests)
  `
}

module.exports = generateMarkdown;