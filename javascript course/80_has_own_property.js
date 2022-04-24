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

for (let key in user1){
    // console.log(key);
    // will give all key also of __proto__
    if (user1.hasOwnProperty(key)){
        console.log(key);
    }
}