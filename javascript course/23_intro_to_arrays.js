// it is a reference type.
// it is ordered collection of items.

let fruits = ["apple","mango","guava"];
console.log(fruits);
console.log(fruits[0]);

let numbers = [1,2,3,4];
console.log(numbers)

fruits[1] = "aman"; // will change
console.log(fruits , typeof fruits);
console.log(Array.isArray(fruits));