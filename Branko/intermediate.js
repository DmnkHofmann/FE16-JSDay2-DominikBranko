// Write an anonymous JavaScript

// function to capitalize only the first letter of a string.The

// function accepts only one string argument.

// E.g.If we pass the following string 'i am a web developer'
// we should get the message 'I am a web developer'

// Hint: Check JavaScript String charAt() Method


const title1 = (str) => {
    let text = str[0].toUpperCase() + str.substring(1);
    return text;

}
console.log(title1("i am a web developer"));


// Average Grade
// Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

// E.g. If you put the following grades 3, 4, 5 the result should be:

// Sum:12

// Average: 4


const sumOf = (Math, Physics, English) => {

    let sum = Math + Physics + English;
    let avarage = sum / 3;

    let result = [sum, avarage];
    return result;
}

console.log(sumOf(3, 4, 5)[0])
console.log(sumOf(3, 4, 5)[1])