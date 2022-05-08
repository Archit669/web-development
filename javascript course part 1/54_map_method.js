// it will pass that number and index as argument in call back function
// and will return an array.

const numbers  = [3,4,5,6,7];
const squareNumbers = numbers.map(number => number*number);
console.log(squareNumbers);