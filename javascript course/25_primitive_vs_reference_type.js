// primitive type.

let num1 = 6;
let num2 = num1;

console.log(num1 , num2);
num1++;
console.log(num1 , num2);

// reference type

let array1 = ["item1" , "item2"];
let array2 = array1;
console.log(array1,array2);
array1.push("item3");
console.log(array1,array2);
// here when we do changes in arrray1 then array2 also changes 
// because array is refernce type.
// array 1 stores the address that points to array in heap memory.
// array 2 also stores the address that points to same array.
// that why changes occur.