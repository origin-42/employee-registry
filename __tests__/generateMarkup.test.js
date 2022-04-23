const generateMarkdown = require("../src/generateMarkdown");


describe("Generate Markup", () => {

    describe("call to function", () => {

        it("Should receive a array", () => {

            let obj = [{
                  id: '234',
                  name: 'adwd',
                  email: 'dawd@bdrg',
                  officeNumber: '324',
                  role: 'Manager'
                }, {
                  id: '325',
                  name: 'awdaw',
                  email: 'wadwa@btbrt',
                  github: 'dawdawWFAW223',
                  role: 'Engineer'
                }, {
                  id: '2342',
                  name: 'AWDWAgsge',
                  email: 'daw@tdbdr',
                  school: 'dawdaw',
                  role: 'Intern'
            }];

            expect(Array.isArray(obj)).toBe(true);

        });

        it("When invoked, return a string representing a HTML file with input data", () => {

            let obj = [{
                id: '234',
                name: 'adwd',
                email: 'dawd@bdrg',
                officeNumber: '324',
                role: 'Manager'
              }, {
                id: '325',
                name: 'awdaw',
                email: 'wadwa@btbrt',
                github: 'dawdawWFAW223',
                role: 'Engineer'
              }, {
                id: '2342',
                name: 'AWDWAgsge',
                email: 'daw@tdbdr',
                school: 'dawdaw',
                role: 'Intern'
            }];

            let html = generateMarkdown.generateMarkdown(obj);

            expect(typeof html === "string").toBe(true);

        });

    });

});