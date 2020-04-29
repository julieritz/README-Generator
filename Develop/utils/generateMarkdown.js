function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
## Installation Requirements
${data.installation}
## How to Use
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
