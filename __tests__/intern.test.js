const Intern = require("../lib/internClass");

describe("Intern", () => {
    describe("Initialisation", () => {
        // Positive Test: Check to see if calling the Intern subclass with a name inherits values from the Employer class
        it ("Should initialise a Intern object with inherited values from Employer", () => {

            // Define a new Intern
            const intern = new Intern(10901, "Jack", "animals65@gmail.com");
            let thisId = intern.id;
            let thisName = intern.name;
            let thisemail = intern.email;

            // Check the values have been set
            expect(thisId).toEqual(10901);
            expect(thisName).toEqual("Jack");
            expect(thisemail).toEqual("animals65@gmail.com");

        })

        // Positive Test: check to see if creating a Intern subclass sets non inherited values and they are the correct primitive type
        it("Should set it's own values via it's constructor", () => {

            // Define a new intern 
            const intern = new Intern(10293, "Robert", "goldenGate@gmail.com", "Curtin University");

            // Check to see if values have been set
            expect(intern.school).toEqual("Curtin University");
            // Check primitive type
            expect(typeof intern.school).toBe("string");
            
        })

        // Positive Test: Check to see if the intern subclass creates a method that, when invoked, returns it's school name
        it("Should creates a new method 'getSchool', which returns its own school name", () => {

            // Define a new intern 
            const intern = new Intern(10274, "Susan", "007Bop@gmail.com", "The Universiity of Western Australia (UWA)");
            let thisSchool = intern.getSchool();

            // Check if school name is returned
            expect(thisSchool).toEqual("The Universiity of Western Australia (UWA)");

        })

        // Positive Test: check to see if creating a Intern subclass also creates a new method and that old methods are inherited from the Employee class
        it("Should inherit Employee parent class methods and update it's own getRole method", () => {

            // Define a new Intern 
            const intern = new Intern(10284, "Cinderella", "wrongShoe@gmail.com", "Murdoch University");
            let theId = intern.getId();
            let theName = intern.getName();
            let theEmail = intern.getEmail();
            // Check role
            let theRole = intern.getRole();

            // Check to see if the values are returned
            expect(theId).toEqual(10284);
            expect(theName).toEqual("Cinderella");
            expect(theEmail).toEqual("wrongShoe@gmail.com");
            // Check role
            expect(theRole).toEqual("Intern");

        })
    })
})