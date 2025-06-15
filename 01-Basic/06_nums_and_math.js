// const score = 100;

// console.log(score);

// const number = new Number("900");

// console.log(number);

// Method	               Description
// _______________________________________________________

// Number()	          |   Converts a value to a number.
// parseInt()	        |  Parses a string and returns an integer.
// parseFloat()	      |   Parses a string and returns a floating-point number.
// toFixed(n)	        |   Formats number using fixed-point notation (keeps n decimals).
// toExponential(n)    |  Converts to exponential notation with n decimals.
// toPrecision(n)	    |  Formats to a number with total n digits (including decimals).
// toString(base)	    |   Converts number to string (you can specify base: 2 for binary, etc.).
// valueOf()	          |  Returns the primitive value of a Number object.
// isNaN()	            |  Checks if the value is NaN (Not a Number).
// isFinite()          |  Checks if the number is finite.

const value = 300.00099;

const fixesValue = (value.toFixed(3));
console.log(fixesValue);

const math = 53.53;

console.log(math.toPrecision(1));


const eng = "76.66";

// console.log(eng.toString().length);
// console.log(parseInt(eng)	);
// console.log(typeof (parseFloat(eng))	);

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));


