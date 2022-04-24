const user = {
    firstName : "harshit",
    address : {houseNumber : 1234}
};

console.log(user.firstName);
// console.log(user.address.houseNumber);

// it will give error when address is not present in object 
// so to avoid that error.

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
console.log(user?.address?.age);