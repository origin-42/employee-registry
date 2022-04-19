const Engineer = require("../lib/engineerClass");

describe("Engineer", () => {
    describe("Initialisation", () => {
        // Positive Test: Check to see if calling the Engineer subclass with a name inherits values from the Employer class
        it ("Should initialise a Engineer object with inherited values from Employer", () => {

            // Define a new Engineer
            const engineer = new Engineer(112, "Rubarb", "caustic@gmail.com");
            let thisId = engineer.id;
            let thisName = engineer.name;
            let thisemail = engineer.email;

            // Check the values have been set
            expect(thisId).toEqual(112);
            expect(thisName).toEqual("Rubarb");
            expect(thisemail).toEqual("caustic@gmail.com");

        })

        // Positive Test: check to see if creating a Engineer subclass sets non inherited values and they are the correct primitive type
        it("Should set it's own values via it's constructor", () => {

            // Define a new Engineer 
            const engineer = new Engineer(109, "Davus", "godly@gmail.com", "origin-42");

            // Check to see if values have been set
            expect(engineer.github).toEqual("origin-42");
            // Check primitive type
            expect(typeof engineer.github).toBe("string");
            
        })

        // Positive Test: Check to see if the Engineer subclass creates a method that, when invoked, returns it's github username
        it("Should creates a new method 'getGithub', which returns its own github username", () => {

            // Define a new Engineer 
            const engineer = new Engineer(111, "Gary", "james78@gmail.com", "jamie_89");
            let thisUsername = engineer.getGithub();

            // Check if username is returned
            expect(thisUsername).toEqual("jamie_89");

        })

        // Positive Test: check to see if creating a Engineer subclass also creates a new method and that old methods are inherited from the Employee class
        it("Should inherit Employee parent class methods and update it's own getRole method", () => {

            // Define a new Engineer 
            const engineer = new Engineer(103, "Craig", "dominospizza@gmail.com", "sara-jess");
            let theId = engineer.getId();
            let theName = engineer.getName();
            let theEmail = engineer.getEmail();
            // Check role
            let theRole = engineer.getRole();

            // Check to see if the values are returned
            expect(theId).toEqual(103);
            expect(theName).toEqual("Craig");
            expect(theEmail).toEqual("dominospizza@gmail.com");
            // Check role
            expect(theRole).toEqual("Engineer");

        })
    })
})