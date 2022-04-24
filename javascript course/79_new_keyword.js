// 1) create empty object this = {}
// 2) return this
// 3) will set __proto__ of object as prototype of function

// if we create object by new then convention is CreateUser instead of creteUser.
function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

CreateUser.prototype.is18 = function(){
    return (this.age >=18);
}

user1 = new CreateUser("archit","jain","architjain669@gmail.com","19","address1");
console.log(user1);

console.log(user1.is18());
console.log(user1.about());