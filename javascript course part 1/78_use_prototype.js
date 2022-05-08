
function createUser(firstName,lastName,email,age,address){
    // thus will set userMethods as __proto__ of user.
    // first javascript find method in user1 and then find method in __proto__ of user1.
    // __proto__ and [[prototype]] are same thing
    // prototype is different thing
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

createUser.prototype.is18 = function(){
    return (this.age >=18);
}

user1 = createUser("archit","jain","architjain669@gmail.com","19","address1");
console.log(user1);

console.log(user1.is18());
console.log(user1.about());