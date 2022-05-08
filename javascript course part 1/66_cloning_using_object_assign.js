// memory
const obj = {
    key1 : "value1",
    key2 : "value2"
}

// clone using spread operator
const obj2 = {...obj}; // this is new way
console.log(obj===obj2); // will give false

// clone using object.assign
const obj3 = Object.assign({},obj); // this is older way