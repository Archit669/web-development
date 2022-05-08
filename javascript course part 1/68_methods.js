// function inside object

const person = {
    firstName : "harshit",
    age : 8,
    about : function(){
        console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    }
};

// console.log(person.firstName);
// console.log(person.about);

person.about();

// if we define person externally

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
};

const person1 = {
    firstName : "aman",
    age : 8,
    about : personInfo
};
const person2 = {
    firstName : "mohit",
    age : 9,
    about : personInfo
};
const person3 = {
    firstName : "rohit", 
    age : 10,
    about : personInfo
};

personInfo();
person1.about();
person2.about();
person3.about();


