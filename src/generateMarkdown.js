const cards = require("./cards");
const markup = require("../src/markup");

// Create a markdown string and return it, filled with requested data from user
const generateMarkdown = (data) => {
  
    let htmlFile = [markup.markup];

    // Check each index (employee object) of the data array
    data.forEach(employee => {
     
        // return github to lowercase
        if (employee.github) {
            employee.github = employee.github.toLowerCase();
        };
       
        // create a single variable depending on the type of employee
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
