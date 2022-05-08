// const array = ["value1","value2"];
// let myvar1 = array[0];
// let myvar2 = array[1];
// console.log(myvar1,myvar2);

// shortcut way
const array = ['a','b'];
let [myvar3,myvar4] = array;
console.log(myvar3,myvar4);

let [myvar5 , , myvar6] = array;
console.log(myvar5,myvar6);

// in spread operator.
myArray = ['a','b','c','d','e','f','g'];
let [var1 , var2 , ...myNewArray] = myArray;
console.log(var1,var2,myNewArray);