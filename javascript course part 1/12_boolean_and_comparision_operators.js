// booleans - true and false

// relational operators used for comparision
// > , < , >= ,<=

let num1 = 7;
let num2 = 5;

console.log(num1>num2);
console.log(num1<num2);
console.log(num1<=num2);
console.log(num1>=num2);

num2 = "7";
console.log(num1>num2);
console.log(num1<num2);
console.log(num1<=num2);
console.log(num1>=num2);


// == vs ===
let newnum1 = 5;
let newnum2 = "5";

// == will only check value not datatype.
console.log(newnum1==newnum2);
// === will also check datatype
console.log(newnum1===newnum2);


// != vs !==

// != will only check value not datatype
console.log(newnum1!=newnum2);
// !== will  check value and also datatype
console.log(newnum1 !== newnum2);