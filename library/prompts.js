//prompt questions for the command line to generate logo params
const questions = [
    {
        type: "input",
        message: "Please enter letters for your logo. (minimum of three characters",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter a color name or hexidecimal for your logo text.",
        name: "textColor",
    },
    {
        type: "list",
        message: "What shape would you like for your logo?",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ],
        default:
            "circle",
        name: "shape",
    },
    {
        type: "input",
        message: "Please enter a color for your logo shape with a color name or hexidecimal.",
        name: "logoColor",
    },

];

//make this file available as called questions
exports.questions = questions;