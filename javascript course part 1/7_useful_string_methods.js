"use strict";

// 1. trim()
// 2. toUppercase()
// 3. toLowercase()
// 4. slice()


// trim() will retrun string in which starting and ending spaces are removed.
let firstName = "    archit     "
console.log(firstName);
firstName = firstName.trim();
console.log(firstName);

// toUppercase() will return converted  string element into uppercase.
firstName = firstName.toUpperCase();
console.log(firstName);

// to lowercase() will return converted  string element into lowercase.
firstName = firstName.toLowerCase();
console.log(firstName);


// slice() will return  sliced string
let n1firstName = firstName.slice(0,3);
console.log(n1firstName);
let n2firstName = firstName.slice(1);
console.log(n2firstName);


