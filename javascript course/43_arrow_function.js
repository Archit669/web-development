// arrow function for sum of two numbers
const sum = (a,b) => a+b;
console.log(sum(3,2));

// arrow function for check given no is even or odd.
const isEven = num => num%2===0;
console.log(isEven(2));

// arrow function for linear search.
const search = (array , target) => {
    for (let index in array){
        if (array[index] == target){
            return index;
        }
    }
    return -1;
}
console.log(search([1,2,3],3))


// arrow function to print hello
const hello = () => console.log("hello");
hello();