const cards = require("./cards");
const markup = require("../dist/markup");

const generateMarkdown = (data) => {
    
    let htmlFile = [markup.markup];

    data.forEach(employee => {

        let association = employee.officeNumber || employee.github || employee.school;
        
        // Generate and push each card given into html file
        htmlFile.push(cards.generateCard(employee.id, employee.name, employee.email, association, employee.role));

    });

    htmlFile.push(markup.markupLatter);

    return htmlFile.join("");
}

module.exports = {
    generateMarkdown: generateMarkdown
};