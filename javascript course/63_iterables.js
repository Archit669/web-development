// iterables
// jispe hum for of loop lga skte h.
// string , array are iterables.

const firstName = "harshit";
for (let alphabet of firstName){
    console.log(alphabet);
}

// objects are not iterable.
const person = {
    name : "archit",
    class : 'cseb',
    year : "IST year"
};

// will cause error because objects are not iterable.
// for (let key of person){
//     console.log(key);
// }

// we can use for of loop on objects using Objects.keys()

for (let key of Object.keys(person)){
    console.log(key,':',person[key]);
}

// we can also use for in loop in objects
for (let key in person){
    console.log(key,':',person[key]);
}

// array like objects
// jinke pass length property hoti h
// aur jinko hum index se access kr skte h.
// example : string.
