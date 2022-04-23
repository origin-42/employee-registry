let generateFace = require("../dist/generateFace");

// generate a card for the markup for each emplyee selected
const generateCard = (id, name, email, association, role) => {

    let firstName = name.split(" ").shift();
    let lastName = name.split(" ").pop();
    

    let html = [`<div class="card" data-role="${role.toLowerCase()}" data-show="true">
                    <img src="./dist/images/faces/${generateFace()}" class="card-img-top" alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${firstName} ${lastName}</h5>
                        <h4 class="card-title">Role: ${role}</h4>\n`];

    html.push(`<div class="card-container">   
    <h3>Employee ID: <span id="EmployeeId">${id}</span></h3>
    <a href="mailto:${email}?subject=CEO" title="email me">Email: ${email}</a>\n`);

    if (role == "Engineer") {
        html.push(`<a href="https://github.com/${association}" target="_blank" class="btn btn-primary" title="visit my Github">Github: ${association}</a>\n`)
    };
    if (role == "Intern") {
        html.push(`<p class="card-title">School: ${association}</p>\n`)
    };
    if (role == "Manager") {
        html.push(`<p class="card-title">Office Number: ${association}</p>\n`)
    };

    html.push(`</div>\n</div>\n</div>\n`);

    return html.join(""); 
};

module.exports = {
    generateCard: generateCard
}