// callback function of filter method should return boolean.
// will pass number and index as argument in callback function.
// will return an array.

const numbers = [1,3,2,6,4,8];
const even_array = numbers.filter(number=>number%2===0);
console.log(even_array);
const odd_array = numbers.filter(number=>number%2!==0);
console.log(odd_array);
