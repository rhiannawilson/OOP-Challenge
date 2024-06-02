const inquirer = require('inquirer');
const fs = require('fs');
const { circle, triangle, square } = require('./lib/shapes');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Text : Enter up to three characters:"

    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Enter a color keyword (OR a hexadecimal number"

    },
    {
        type: "input",
        name: "shape-color",
        message: "Shape Color: Enter a color keyword (OR a hexadecimal number"
    },
    {
        type: "list",
        name: "image-size",
        message: "Choose which pixel mage you would like?",
        choices: ["circle, triangle, square"]
    },
];
// console.log(questions);