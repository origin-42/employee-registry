const Manager = require("../lib/managerClass");

describe("Manager", () => {
    describe("Initialisation", () => {
        // Positive Test: Check to see if calling the Manager subclass with a name inherits values from the Employer class
        it ("Should initialise a Manager object with inherited values from Employer", () => {

            // Define a new Manager
            const manager = new Manager(99, "Diixon", "Baubles@gmail.com", 3);
            let thisId = manager.id;
            let thisName = manager.name;
            let thisemail = manager.email;

            // Check the values have been set
            expect(thisId).toEqual(99);
            expect(thisName).toEqual("Diixon");
            expect(thisemail).toEqual("Baubles@gmail.com");

        })

        // Positive Test: check to see if creating a Manager subclass sets non inherited values and they are the correct primitive type
        it("Should set it's own values via it's constructor", () => {

            // Define a new Manager 
            const manager = new Manager(99, "Mikey", "whiplash@gmail.com", 4);

            // Check to see if values have been set
            expect(manager.officeNumber).toEqual(4);
            // Check primitive type
            expect(typeof manager.officeNumber).toBe("number");
            
        })

        // Positive Test: check to see if creating a Manager subclass also creates a new method and that old methods are inherited from the Employee class
        it("Should inherit Employee parent class methods and update it's own getRole method", () => {

            // Define a new Manager 
            const manager = new Manager(99, "Daniella", "smokey@gmail.com", 10);
            let theId = manager.getId();
            let theName = manager.getName();
            let theEmail = manager.getEmail();
            // Check role
            let theRole = manager.getRole();

            // Check to see if the values are returned
            expect(theId).toEqual(99);
            expect(theName).toEqual("Daniella");
            expect(theEmail).toEqual("smokey@gmail.com");
            // Check role
            expect(theRole).toEqual("Manager");

        })
    })
})