// 2015 / ES6
// class keyword
// class are fake in javascript

class CreateUser{
    constructor(firstName , lastName , email, age , address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return (this.age >=18);
    }
}

user1 = new CreateUser("archit","jain","architjain669@gmail.com",19,"address 1");
console.log(user1);