const numbers = [5,9,1200,40000,3000];
// numbers.sort();
// console.log(numbers); // will give wrong output
// bcz sort in javascript will sort on basis of ascii values.

numbers.sort((a,b) => a-b);
console.log(numbers); // will sort in ascending order.

numbers.sort((a,b) => b-a);
console.log(numbers); // will sort in descending order.

// here a is first number of array and b is second number of array.