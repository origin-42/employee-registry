const generateCard = require("../src/cards");

describe("Card Generator", () => {

    describe("function call", () => {

        it("Received data should be inserted into and returned as HTML", () => {

            let id = 324;
            let name = "dave Plummer"
            let email = `awdaw@dawdnw.com`;
            let officeNumber = 123;
            let github = "origin-42";
            let school = "UWA";
            let role = "Manager";

            let html1 = generateCard.generateCard(id, name, email, officeNumber, role);
            let html2 = generateCard.generateCard(id, name, email, github, role);
            let html3 = generateCard.generateCard(id, name, email, school, role);

            let result1 = html1.includes(id && name && email && officeNumber && role);
            let result2 = html2.includes(id && name && email && github && role);
            let result3 = html3.includes(id && name && email && school && role);

            expect(result1).toBe(true);
            expect(result2).toBe(true);
            expect(result3).toBe(true);

        });

    })

})