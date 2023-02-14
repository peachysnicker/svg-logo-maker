// D/First text prompt - min of 3 characters 
// D/Second text prompt - text colour in hex or text
// D/Third prompt shape - list says : circle, triangle, square
// D/Shapes color - color keyword or hex
// When all entered an SVG FILE is created named ‘logo.svg
// Text output in command line is “Generated logo.svg’
// When you open the file in browser a 300x200 px image of logo shows

const inquirer = require('inquirer');
const questions = require('./library/prompts');
const shapes = require('./library/shapes');

prompt.questions.then(shapes);

//Function to ensure min of 3 characters or valid text input 
function charsLength(response) {
    if (!response) {
        return "Please input a valid response";
    }
    if (response.length < 3) {
        return "Please input at least 3 characters";
    }
    return true;
};


//Function to create the svg file after prompt questions
inquirer
    .prompt(questions)
    .then((response) =>
        fs.writeFile("readme.md",

//if error will console log the error or console log success msg
  (err) => (err ? console.log(err) : console.log("succes!!"))
  ));
