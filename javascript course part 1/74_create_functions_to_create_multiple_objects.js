function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function(){
        return (this.age >=18);
    }

    return user;
}

user1 = createUser("archit","jain","architjain669@gmail.com","19","address1");
console.log(user1);