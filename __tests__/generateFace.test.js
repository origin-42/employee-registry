const generateFace = require("../dist/generateFace");

describe("Generate Face", () => {

    describe("Initialisation", () => {

        it("Should return a random face between the 0th index and 7th index of images", () => {

            let images = ["face1.jpg", "face2.jpg", "face3.jpg", "face4.jpg", "face5.jpg", "face6.jpg", "face7.jpg", "face8.jpg"];
            
            let face1 = generateFace();
            let face2 = generateFace();
            let face3 = generateFace();

            expect(face1).toEqual(images.find((item) => item == face1 ? item : false));
            expect(face2).toEqual(images.find((item) => item == face2 ? item : false));
            expect(face3).toEqual(images.find((item) => item == face3 ? item : false));

        })

    })

})
