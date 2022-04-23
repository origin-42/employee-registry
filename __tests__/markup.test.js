const markup = require("../src/markup");

describe("markup", () => {

    describe("markup variable", () => {

        it("markup.markup should contain markup similar to a standard markup document", () => {

            let html = `${markup.markup}`;
            let mockdata = `iewport" content="width=device-wid`;

            let value = html.includes(mockdata);

            expect(value).toBe(true);

        });

        it("markup.markupLatter should contain markup similar to a standard markup document", () => {

            let html = `${markup.markupLatter}`;
            let mockdata = "</main";

            let value = html.includes(mockdata);

            expect(value).toBe(true);

        });

    });

});