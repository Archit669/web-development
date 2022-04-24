"use strict";
let array1 = ['item1','item2'];
let array2 = array1;
console.log(array1 === array2);
array1.push('a');
console.log(array1===array2);

// first method to clone array.

array1 = ['item1','item2'];
array2 = ['item1','item2'];
console.log(array1===array2);

// second method to clone array using slice method. (fastest)
array1 = ['item1','item2'];
array2 = array1.slice(0);
console.log(array1,array2);
console.log(array1 === array2);

// third method to clone array using concat method.
array1 = ['item1','item2'];
array2 = [].concat(array1,"archit");
console.log(array1,array2);
console.log(array1 === array2);

// forth method to clone array using spread operator.(most used method)
array1 = ['item1','item2'];
array2 = [...array1];
console.log(array1,array2);
console.log(array1 === array2);

// in spread operator clone array and also put other eleements.
array1 = ['item1','item2'];
array2 = [...array1,"item3","item4"];
console.log(array1,array2);
console.log(array1 === array2);

// two array
let oneMoreArray = ["a","b"];
array2 = [...array1 , ...oneMoreArray];
console.log(array2);
