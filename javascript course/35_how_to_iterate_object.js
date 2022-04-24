const person = {
    name : "archit",
    age : 22,
    "personal hobbies" : ['guitar','sleeping','listening music']
}


for (let key in person){
    console.log(key);
}

for (let key in person){
    console.log(person[key]);
}

for (let key in person){
    console.log(`${key} : ${person[key]}`);
}

// object keys
console.log(Object.keys(person)); // will return array of keys.
console.log(typeof Object.keys(person));

const val = Array.isArray(Object.keys(person));
console.log(val);

for (let key of Object.keys(person)){
    console.log(key);
    console.log(person[key]);
}

