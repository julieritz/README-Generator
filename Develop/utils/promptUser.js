const inquirer = require("inquirer");

const promptUser = questions => {
    console.log("prompting user")
    return inquirer.prompt(questions)
}

module.exports = promptUser