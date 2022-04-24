// undefined datatype
let firstName;
console.log(firstName,typeof firstName);
firstName = "hershit";
console.log(typeof firstName,firstName);

// null
let myVariable = null;
console.log(myVariable);

// bug in javascript
console.log(typeof myVariable,myVariable);
// this is bug in javascript in which typeof gives object instead of null for null datatypes.


// BigInt

let num = 123;
console.log(num , typeof num);
console.log(Number.MAX_SAFE_INTEGER);

let newnum = BigInt(9007199254740991); // use of BigInt
console.log(newnum);

let newnum2 = 123n; // use of BigInt
console.log(newnum + newnum2);

// we can cannot merge BigInt with other datatypes
// console.log(num + newnum); // will cause error
