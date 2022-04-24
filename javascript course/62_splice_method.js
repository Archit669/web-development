// this method will alter original array.
// start , delete , insert

const myArray = ['item1','item2','item3'];
// delete element at index 1
myArray.splice(1,1);
console.log(myArray);
// insert element at index 0
myArray.splice(0,0,'inserted item');
console.log(myArray);
// delete element at index 1 and insert two elements
myArray.splice(1,1,'inserted string 1','inserted sting 2');
console.log(myArray);