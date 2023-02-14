const {writeFile} = require(fs);
const {shapes} = require('./shapes');

//function to generate the svg with data acquired from prompts

function createLogo(data) {

    let shape = new createLogo (data.shapeColor, data.textColor, data.chars).getShape(data.shape);
    writeFile('.ex/logos.svg', shape.render(), ()=> console.log("success!"));
}

//makes this file available as createLogo;
exports.createLogo = createLogo;
