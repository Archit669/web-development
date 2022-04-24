// let numbers = [1,2,3];
let numbers = new Array(1,2,3);
console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers));

function hello(){
    console.log("hello");
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
