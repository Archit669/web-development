// spread operator in array 
array1 = [1,2,3];
array2 = [..."abc"];
console.log(array2);
// array3 = [...123445667]; // will cause error


// spread operator in objects
// in object same key cannot repeat
const obj1 = {
    name:"archit",
    class:"cse b",
    rollNo : 30
};    
const obj2 = {
    name:"aman",
    friend : "aman"
};    


const obj3 = {...obj1 , ...obj2};
// here name key of obj2 will use.
console.log(obj3);

const obj4 = {..."abc"};
console.log(obj4);

const obj5 = {...["item1","item2"]};
console.log(obj5);



