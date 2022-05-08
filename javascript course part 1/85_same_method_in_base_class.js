// this is base class
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    about(){
        return `${this.name} is ${this.age} years old.`
    }

    eat(){
        return `${this.name} is eating.`
    }
}


// inheritance

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    // this will call first
    about(){
        return `${this.name} speed is ${this.speed}.`
    }
    speedfunc(){
        return `${this.name} speed is ${this.speed} km/h.`
    }
}

const dog1 = new Dog("cherry",9,100);
console.log(dog1);
console.log(dog1.about());
console.log(dog1.speedfunc());