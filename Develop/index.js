const fs = require("fs");
const axios = require("axios");
const promptUser = require("./utils/promptUser");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is the title of your repository?",
    name: "title"
  },
  {
    type: "input",
    message: "Write a description of the project:",
    name: "description"
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation"
  },
  {
    type: "input",
    message: "What is the usage description?",
    name: "usage"
  },
  {
    type: "list",
    message: "License type?",
    name: "license",
    choices: [
      "Apache License 2.0", 
      "GNU GPLv3", 
      "MIT",
      "Other",
      "None"
    ]
    },
  {
      type: "input",
      message: "Contributors:",
      name: "contributors"
  },
  {
    type: "input",
    message: "What are the tests?",
    name: "tests"
  },
  {
      type: "input",
      message: "Have any questions?",
      name: "questions"
  }
];

function writeToFile(fileName, data) {
  console.log("writing file")
  fs.writeFileSync(fileName, data) 
  console.log("file write complete")
}

function init() {
  console.log("initializing")
  promptUser(questions)
    .then(data => {
      console.log("Success! Check your files for your README.")
      console.log(data)
      const markdown = generateMarkdown(data)
      writeToFile("README.md", markdown)
    })
    .catch(err => {
      console.error(err)
    })
}

init();
