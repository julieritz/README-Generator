function generateMarkdown(data) {
  return `
# ${data.title}
## Link
${data.link}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.badge}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
${data.questions}
### ![userimage](${data.avatar_url})
#### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
