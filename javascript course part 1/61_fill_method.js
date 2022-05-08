// fill all elements of array with undefined.
const array1 = new Array(10).fill();
console.log(array1);
// fill all elements of array with 0.
const array2 = new Array(10).fill(0);
console.log(array2);
// fill all elements of array with 100 with start index (included )
// and end index (not included).
const array3 = [1,2,3,4,5,6,7,8,9,10];
const array4 = array3.slice(0).fill(100,2,5);
console.log(array3);
console.log(array4);

// fill method will change original array.
