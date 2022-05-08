// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranted
// unique items only (no duplicate allowed)

const numbers = new Set([1,2,2,3]);
console.log(numbers);

console.log(numbers[0]);// ---> will give undefined

numbers.add(8);
console.log(numbers);

numbers.add(['item1','item2' ]);
numbers.add(['item1','item2' ]);

// both will add

console.log(numbers);

// will return boolean on the basis of number in numbers is present or not.
console.log(numbers.has(1));

// set is iterable
for (let number of numbers){
    console.log(number);
}


// set has no length property
// so to find out length of a given set.
let length = 0;
for (let index of numbers){
    length++;
}
console.log(length);
