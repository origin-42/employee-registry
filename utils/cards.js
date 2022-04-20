const generateCard = (id, name, email, association, role, photo) => {

    let firstName = name.split(" ").shift();
    let lastName = name.split(" ").pop();

    let html = [`<div class="card" data-role="${role.toLowerCase()}" data-show="true">
                    <img src="${photo}" class="card-img-top" alt="Dave">
                    <div class="card-body">
                        <h5 class="card-title">${firstName} ${lastName}</h5>
                        <h4 class="card-title">${role}</h4>`];

    if (role == "intern") {
        html.push(`<h4 class="card-title">${association}</h4>`)
    };

    html.push(`<div class="card-container">   
    <h3>Employee ID: <span id="EmployeeId">${id}</span></h3>
    <a href="mailto:${email}?subject=CEO" title="email me">${email}</a>`);

    if (role == "Engineer") {
        html.push(`<a href="https://github.com/${association}" target="_blank" class="btn btn-primary" title="visit my Github">${association}</a>`)
    };

    html.push(`</div></div></div>`);

    return html.join(""); // Returns a string with card to add to HTML
};

module.exports = {
    generateCard: generateCard
}