// Get card generator function
const cards = require("./cards");
// cards.generateCard(id, name, email, association, role, photo);

// Get markup
const markup = require("../dist/markup");
// markup.markup - open page
// markup.markupLatter - close page

const generateMarkdown = (data) => {

    let photo = "./dist/images/dave_github.jpg";

    let htmlFile = [markup.markup];

    data.forEach(employee => {

        // Generate and push each card given into html file
        htmlFile.push(cards.generateCard(employee.id, employee.name, employee.email, employee.association, employee.role, photo));

    });

    htmlFile.push(markup.markupLatter);

    return htmlFile.join("");
}

module.exports = {
    generateMarkdown: generateMarkdown
};