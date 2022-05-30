// 1
const crystalGazer = (number, fname, loc, title) => {
    console.log(`You will be a ${title} in ${loc} and married to ${fname} with ${number} children`);
}

crystalGazer(3, "Maja", "Wien", "Web developer");


// 2
const ageCalculator = (byear, cyear) => {
    let sumYear = cyear - byear
    let sumYear1 = cyear - byear + 1
    return `You are either ${sumYear} or ${sumYear1}`;
}
console.log(ageCalculator(1982, 2010));

// Write a function called ageCalculator() that takes two arguments birth year and current year. Calculate 2 possible ages based on those years (two, because we don't know the birth month).

// You should get the following results:

// You are either 29 or 28


// 3
// Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

// E.g. If user passes 90 degrees it should get the result of 1.57079 radians

const blabla = degrees => {
    let pi = Math.PI
    return radians = degrees * (pi / 180);

}
console.log(blabla(90));

// 4

// Create a function that calculates the area and volume of a box.

// Formulas:

// area = width x height

// volume = width x height x depth

// Pass three different numbers as arguments and get calculated results using the return statement.

// You should get the following results:

// The area of the box is: 14

// The volume of the box is: 70


const getResult = (width1, height1, depth1) => {
    let area = `The area od the box is: ${width1 * height1}`;
    let volume = `The volume of the box is: ${width1 * height1 * depth1}`;

    let result = [area, volume];
    return result;
}

console.log(getResult(2, 7, 5)[0]);
console.log(getResult(2, 7, 5)[1]);