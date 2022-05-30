// Time Convert
// Create a JavaScript function that will return the number of minutes, in hours and minutes. The function should accept only one argument.

// E.g. If we call the function and pass the number of minutes 200 we should get the message "200 minutes = 3 hour(s) and 20 minute(s)."


const time1 = num1 => {
    var num = num1;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(time1(350));