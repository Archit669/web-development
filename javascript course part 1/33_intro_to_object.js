// array are good but not sufficient for real world data.
// object store key value pairs.
// object don't have index.
// object is a reference type.


// how to create objects.
const person = {name:"harshit",age:22};
console.log(person);
console.log(typeof person);

// when we create object by applying curly braces then it is also 
// called object literal.


// how to access data from objects.
console.log(person.name);
console.log(person.age);

const person2 = {
    name:"sky",
    age : 22,
    hobbies : ["guitar","sleeping","listening music"]
};

console.log(person2);


// how to add key value pair to object.
person2.gender = "male";
console.log(person2);
console.log(person2["name"]);
person2["gender"] = "female";
console.log(person2);

