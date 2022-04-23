// Create an array of placeholder faces as a representation of the employees
let images = ["face1.jpg", "face2.jpg", "face3.jpg", "face4.jpg", "face5.jpg", "face6.jpg", "face7.jpg", "face8.jpg"];

module.exports = generateFace = () => {
    let randomise =  Math.floor(Math.random() * images.length);
    return images[randomise];
}
