// map is iterable
// stored data in ordered fashion
// store key value pair (like object)
// object can have string or symbol as key
// in maps you can have string or symbol as key
// in maps you can use anything as key
// like array,number,string



// object literal
// key --> string
// key -- > symbol

// const person = {
//     1 : "one",
//     name: "archit",
//     rollno : 72,

// };

// for (let key in person){
//     console.log(key,typeof key);
// }

// key value pair

const person = new Map();
console.log(person);
person.set(1 , 'one');
person.set('2' , 'two');
person.set([1,3,4,5,6],"array");
console.log(person);


// maps are iterable

for (let key of person){
    console.log(key); // will give array of key and pair
}

// right way to iterate maps
for (let [key,value] of person){
    console.log(key , typeof key);
}

console.log(typeof person); // will give object

