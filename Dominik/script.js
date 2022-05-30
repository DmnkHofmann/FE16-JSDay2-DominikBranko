function crystalGazer(number_of_children, partners_name, geographic_location, job_title) { 
    console.log(`You will be a ${job_title} in ${geographic_location} and married to ${partners_name} with ${number_of_children} children.`)
};
crystalGazer("two", "Susi", "Timbuktu", "Metzger");

function ageCalculator (birth_year, current_year) {
    console.log(`You are either ${age = current_year - birth_year} or ${age - 1}`)
};
ageCalculator("1993", "2022");

function ageCalculatorimprove (birth_year) {
    var currentyear = new Date();
    console.log(`You are either ${age = currentyear.getFullYear() - birth_year} or ${age - 1}`)
};
ageCalculatorimprove("1993");

function convert (degrees) {
    let pi = Math.PI
    let temperature = degrees * (pi/180)
    return temperature
};
console.log (convert(90));


function getSize(width, height, depth) {
    let volume = width * height * depth;
    let area = height * width;
    return [area, volume];
  };
  console.log (getSize (7, 2, 5)[0] + " "+ getSize(7,2,5)[1]);

  var area = (function() {  
    var width = 3 ;
    var height = 2;
    return  width * height;
   }());


  (function(text){ 
      var first = console.log(text.charAt(0).toUpperCase() + text.slice(1))
  })("i am a web developer")

  function grades (math, physics, english){
    let sum = Number(math + physics + english);
    let avg = sum / 3;
    return `Sum: ${sum} \nAvg: ${avg}`;
  }
console.log(grades(3,4,5))