const fs = require("fs");
const inquirer = require("./node_modules/inquirer/lib/inquirer");
const Manager = require("./lib/managerClass");
const Engineer = require("./lib/engineerClass");
const Intern = require("./lib/internClass");
const fn = require("./utils/generateMarkdown");

// Create a new object with inquirer format
class PromptObj {
    constructor(name, message, type, validate) {
        this.name = name;
        this.message = message;
        this.type = type;
        this.validate = validate;
    }
}
// Create a new object with inquirer format for choices
class Choices extends PromptObj {
        constructor(name, message, type, choices, validation) {
            super(name, message, type, validation);
            this.choices = choices;
        }
}

// Create red text
let redText = "\x1b[31m"; // Invalid input
// Validation
const handleExceptions = (input, type) => {
    input = input.trim();
    if (type == "email") {
        if (!input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            console.log(redText, "This doesn't seem to match an email format.");
            return false;
        }  else {
            return true;
        };
    } else if (type == "number") {
        if (!input.match(/^[0-9]*$/)) {
            console.log(redText, "Employee ID's are integers only.");
            return false;
        }  else {
            return true;
        };
    }  
    
    if (!input) {
        console.log(redText, "Nothing entered. Please enter a value");
        return false;
    } else if (input) {
        return true;
    } else {
        console.log(redText, "Something went wrong");
        return false;
    };
};

//  Construct Data from classes
const greeting = [new PromptObj("greetingConfirmation", "Welcome to the Team Builder! Let's begin by adding a manager. Ready to begin? ", "confirm")];
const newEmployee = (type) => {
    let arr = [
        new PromptObj("id", `What is the ${type} ID? `, "input", function (input) {
            return handleExceptions(input, "number");
        }),
        new PromptObj("name", `What is the ${type}s first and last name? `, "input", function (input) {
            return handleExceptions(input)
        }),
        new PromptObj("email", `What is the ${type} email address? `, "input", function (input) {
            return handleExceptions(input, "email")
        })
    ];
    if (type == "manager") {
        arr.push(new PromptObj("officeNumber", "What is the managers office number? ", "input", function (input) {
            return handleExceptions(input, "number")
        }))
    } else if (type == "engineer") {
        arr.push(new PromptObj("username", "What is the engineers github username? ", "input", function (input) {
            return handleExceptions(input);
        }))
    } else if (type == "intern") {
        arr.push(new PromptObj("schoolName", "What is the interns school name? ", "input", function (input) {
            return handleExceptions(input);
        }))
    }
    return arr;
};
const requestEmployee = [new Choices("PromptForEmployee", "Choose an option", "list", ["Add a new Engineer", "Add a new Intern", "Finish team building"])]

// Empty array to be filled with resulting inquiry data to be passed
const employeeData = [];

// Construct Inquiry
// Start Application
const begin = () => {
    inquirer.prompt(greeting).then((response) => {
        response.greetingConfirmation ? requestManager() : false;
    })
};
// Get employee data on demand
const requestManager = () => {
    inquirer.prompt(newEmployee("manager")).then((managerData) => {
        let newManager = new Manager(managerData.id, managerData.name, managerData.email, managerData.officeNumber);
        newManager.role = newManager.getRole();
        employeeData.push(newManager);
        promptNewEmployee();
    })
};
const requestEngineer = () => {
    inquirer.prompt(newEmployee("engineer")).then((engineerData) => {
        let newEngineer = new Engineer(engineerData.id, engineerData.name, engineerData.email, engineerData.username);
        newEngineer.role = newEngineer.getRole();
        employeeData.push(newEngineer);
        promptNewEmployee();
    })
};
const requestIntern = () => {
    inquirer.prompt(newEmployee("intern")).then((internData) => {
        let newIntern = new Intern(internData.id, internData.name, internData.email, internData.schoolName);
        newIntern.role = newIntern.getRole();
        employeeData.push(newIntern);
        promptNewEmployee();
    })
};
// Provide menu items
const promptNewEmployee = () => {
    inquirer.prompt(requestEmployee).then((response) => {
        if (response.PromptForEmployee == "Finish team building") {
            console.log("Your data has been registered and file generated. Please inspect the file marked, `employeeRegistry.html`.")
            constructFile(employeeData);
        } else if (response.PromptForEmployee == "Add a new Engineer") {
            requestEngineer();
        } else if (response.PromptForEmployee == "Add a new Intern") {
            requestIntern();
        }
    })
};

// Construct an index file, create with data returned
const constructFile = (data) => {

    let htmlFile = fn.generateMarkdown(data);
    fs.writeFile("./dist/employeeRegistry.html", htmlFile, err => console.log(err))

};

// Begin appliciation
begin();

module.exports = {
    constructFile: constructFile,
    promptNewEmployee: promptNewEmployee,
    requestIntern: requestIntern,
    requestEngineer: requestEngineer,
    requestManager: requestManager,
    begin: begin,
    employeeData: employeeData,
    requestEmployee: requestEmployee,
    newEmployee: newEmployee,
    greeting: greeting,
    handleExceptions: handleExceptions,
    redText: redText,
    PromptObj: PromptObj,
    Choices: Choices,
    fn: fn,
    inquirer: inquirer,
    fs: fs,
}
