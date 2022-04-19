const Employee = require("../lib/employeeClass");

describe("Employee", () => {
    describe("Initialiisation", () => {
        // Positive Test: Test to see if the details are being set
        it("should create an object with 'id, name, and email' properties set as a number, and two strings, respectively, when called with the 'new' keyword and relative parameters", () => {

            // Define a new employee variable
            const employee = new Employee(1080, "Bob", "d.plummer89@hotmail.com");

            // Check to see if each parameters has been set correctly
            expect(typeof employee.id).toBe("number");
            expect(typeof employee.name).toBe("string");
            expect(typeof employee.email).toBe("string");

        });
        // Positive Test: Test to see if the methods return their named values
        it("Should return their respective properties, id, name, and email, when called", () => {

            // Define a new employee variable
            const employee = new Employee(100, "Dave", "jackal@hotmail.com");
            let theId = employee.getId();
            let theName = employee.getName();
            let theEmail = employee.getEmail();

            // Check to see if the values are returned
            expect(theId).toEqual(100);
            expect(theName).toEqual("Dave");
            expect(theEmail).toEqual("jackal@hotmail.com");

        });

        // Positive Test: The getRole method should return "Employee" when called
        it("Should return 'Employee' when called", () => {

            // Define a new employee variable
            const employee = new Employee(1010, "Charles", "charles@hotmail.com");
            let role = employee.getRole();

            expect(role).toEqual("Employee");

        });
    })
})

