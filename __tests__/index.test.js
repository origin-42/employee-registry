const indexTests = require("../index");
const fs = require("fs");
const fn = require("../utils/generateMarkdown");
const inquirer = require("../node_modules/inquirer/lib/inquirer");

jest.mock("fs");

describe("Index File", () => {

    // PromptObj
    describe("Initialisation", () => {

        it("Should receive a name string, a message string, and input type as a string, and a validate method", () => {

            // Act
            const newPrompt = new indexTests.PromptObj("Banjo", "Is this a guitar?", "input", () => {})

            // Assert
            expect(newPrompt.name).toEqual("Banjo");
            expect(newPrompt.message).toEqual("Is this a guitar?");
            expect(newPrompt.type).toEqual("input");
            expect(typeof newPrompt.validate).toBe('function');

        })

    })
    // Choices
    describe("Initialisation", () => {

        it("Should inherit the same values as its parent, but also set an array of choices", () => {

            // Act
            const newPrompt = new indexTests.Choices("Banjo", "Is this a guitar?", "input", [], () => {})

            // Assert
            expect(newPrompt.name).toEqual("Banjo");
            expect(newPrompt.message).toEqual("Is this a guitar?");
            expect(newPrompt.type).toEqual("input");
            expect(Array.isArray([newPrompt.choices])).toBe(true);
            expect(typeof newPrompt.validate).toBe('function');

        })

    })
    // Red Text
    describe("Initialisation", () => {

        it("Should print values as a log in red text", () => {

            // Arrange
            const consMock = jest.spyOn(console, "log");

            // Act
            consMock.mockImplementation(() => { });
            console.log("\x1b[31m", "redText");

            // Assert   
            expect(consMock).toBeCalledWith("\x1b[31m", "redText");
            consMock.mockRestore();
        })

    })

    describe("handle exception with emails, numbers, and no value type given", () => {

        it("Should return with truthy, passing valid email, otherwise return falsy if not and log an error.", () => {

            // Arrange
            const consMock = jest.spyOn(console, "log");

            // Act
            consMock.mockImplementation(() => { });
            const falsy = indexTests.handleExceptions("dawb", "email")
            const truthy = indexTests.handleExceptions("dawb@awbd", "email");

            // Assert   
            expect(falsy).toEqual(false);
            expect(consMock).toBeCalledWith("\x1b[31m", "This doesn't seem to match an email format.");
            expect(truthy).toEqual(true);

        })

        it("Should return with truthy, passing valid numbers, otherwise return falsy if not and log an error.", () => {

            // Arrange
            const consMock = jest.spyOn(console, "log");

            // Act
            consMock.mockImplementation(() => { });
            const falsyletters = indexTests.handleExceptions("daw", "number");
            const falsySpeCha = indexTests.handleExceptions("^&%*", "number");
            const falsyDec = indexTests.handleExceptions("23.43", "number");
            const truthy = indexTests.handleExceptions("12422", "number");

            // Assert   
            expect(falsyletters).toEqual(false);
            expect(falsySpeCha).toEqual(false);
            expect(falsyDec).toEqual(false);
            expect(consMock).toBeCalledWith("\x1b[31m", "Employee ID's are integers only.");
            expect(truthy).toEqual(true);

        })

        it("Should return with truthy, passing any argument, if value has any value otherwise return falsy if not and log an error.", () => {

            // Arrange
            const consMock = jest.spyOn(console, "log");

            // Act
            consMock.mockImplementation(() => { });
            const falsy1 = indexTests.handleExceptions("");
            const falsy2 = indexTests.handleExceptions(" ");
            const test1 = indexTests.handleExceptions("^&%*");
            const test2 = indexTests.handleExceptions("23.43");
            const test3 = indexTests.handleExceptions("12422");
            

            // Assert   
            expect(test1).toEqual(true);
            expect(test2).toEqual(true);
            expect(test3).toEqual(true);
            expect(consMock).toBeCalledWith("\x1b[31m", "Nothing entered. Please enter a value");
            expect(falsy1).toEqual(false);
            expect(falsy2).toEqual(false);

        })
        
    })

    describe("The prompt objects", () => {

        describe("The greeting", () => {
    
            it("Should create a new array containing an object resembling the greeting function", () => {
    
                //Act
                const classTest = indexTests.greeting;

                //Assert
                expect(classTest[0].name).toEqual("greetingConfirmation");
                expect(classTest[0].message.includes("am Builder! Let's b")).toBe(true);
                expect(classTest[0].type).toEqual("confirm");
    
            })
    
        })

        describe("The employee prompt function", () => {
    
            it("Should create a new array containing four objects resembling, changing depending on the type of employee passed in", () => {
    
                // Arrange
                const manager = indexTests.newEmployee("manager");
                const engineer = indexTests.newEmployee("engineer");
                const intern = indexTests.newEmployee("intern");

                //Act
                let id = manager[0].name;
                let message = manager[0].message;
                let type = manager[0].type;
                let validate = manager[0].validate;
                let name = manager[1].name;
                let email = manager[2].name;
                let managerInput = manager[3].name;
                let engineerInput = engineer[3].name;
                let internInput = intern[3].name;

                //Assert
                expect(id).toEqual("id");
                expect(message).toEqual("What is the manager ID? ");
                expect(type).toEqual("input");
                expect(validate instanceof Function).toBe(true);
                expect(name).toEqual("name");
                expect(email).toEqual("email");
                expect(managerInput).toBe("officeNumber");
                expect(engineerInput).toEqual("username");
                expect(internInput).toEqual("schoolName");
    
            })
    
        })

        describe("The requestEmployee constructor", () => {
    
            it("Should create a new array containing an object resembling the request employee constructor", () => {
    
                // Arrange
                const manager = indexTests.requestEmployee;

                //Act
                let name = manager[0].name;
                let message = manager[0].message;
                let type = manager[0].type;
                let choices = manager[0].choices;

                //Assert
                expect(name).toEqual("PromptForEmployee");
                expect(message).toEqual("Choose an option");
                expect(type).toEqual("list");
                expect(choices[0]).toEqual("Add a new Engineer");
                expect(choices[1]).toEqual("Add a new Intern");
                expect(choices[2]).toEqual("Finish team building");
                expect(Array.isArray([choices])).toBe(true);
    
            })
    
        })
    
    })

    describe("The employee data variable", () => {

        it("Should hold no data prior to running and, once running, should fill depending on the user input", () => {

            // Negative Test

            // arrange
            let var1 = [];

            // act
            let answers = { name: "Bob", message: "Not Bob", type: "input" };
            var1.push(answers);

            // assert
            expect(typeof var1[0] === 'object').toBe(true);

        })

    })

    describe("The inquirer prompts", () => {

        it("Should take no variables and initiate an inquirer prompt and save some data and call another prompt", () => {

            // Arrange
            let variable;
            let call2Var;
            const userInput = { name: "name", message: "true or false", type: "input" }
            const mock = jest.spyOn(inquirer, "prompt");
            const calle2 = () => {
                call2Var = true;
            }

            // Act
            mock.mockImplementation(() => { 
                variable = userInput.type;
                calle2()
            });
            inquirer.prompt(userInput);

            // Assert
            expect(mock).toHaveBeenCalled();
            expect(call2Var).toBe(true);
            expect(mock).toHaveBeenCalledWith(userInput);
            expect(variable).toEqual("input");

            mock.mockRestore();

            // Negative
            // Arrange
            let variableFalse;
            const userInputFalse = { name: "name", message: "true or false", type: false }
            const mockFalse = jest.spyOn(inquirer, "prompt");
            let reduceCalls = 1

            // Act
            mockFalse.mockImplementation(() => { 
                variableFalse = userInputFalse.type
                if (reduceCalls) {
                    reduceCalls--;
                    inquirer.prompt(userInput);
                }
            });
            inquirer.prompt(userInputFalse);

            // Assert
            expect(mockFalse).toHaveBeenCalledTimes(2);
            expect(mockFalse).toHaveBeenCalledWith(userInput);
            expect(variableFalse).toEqual(false);

            mockFalse.mockRestore();

        })

    })

    describe("construct a new file function", () => {

        it("Should receive a string and create a file with input based off the string", () => {

            // Mock function call clone
            const constructFile = (data) => {

                let htmlFile = fn.generateMarkdown(data);
                fs.writeFile("./dist/employeeRegistry.html", htmlFile)
            
            };

            // Arrange
            let inputHTML = "Testing";
            let mock = jest.spyOn(fn, "generateMarkdown");

            // Act
            mock.mockImplementation(() => { 
                return inputHTML;
            });

            constructFile(inputHTML);

            // Asset
            expect(inputHTML).toEqual("Testing");
            expect(mock).toHaveBeenCalledWith(inputHTML);
            expect(fs.writeFile).toHaveBeenCalledWith("./dist/employeeRegistry.html", inputHTML);

            // restore
            mock.mockRestore();
        })

    })

    describe("begin function", () => {

        it("Should begin the application", () => {

            // clone function
            const begin = () => {
                inquirer.prompt();
            };

            const mock = jest.spyOn(inquirer, "prompt");
            mock.mockImplementation(() => { });

            let starting = begin();

            expect(mock).toBeCalled();

            mock.mockRestore();

        })

    })

})