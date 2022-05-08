// javascript function  => function + object

function hello(){
    console.log("hello world");
}
// will tell name of function
console.log(hello.name);

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// function has a object named prototype.
// we can use it to add own properties and methods

console.log(hello.prototype);