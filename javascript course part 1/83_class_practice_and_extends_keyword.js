// create animal class
// has two properties and two methods

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

const pet1 = new Animal(`tommy`,5);
console.log(pet1);
console.log(pet1.about());
console.log(pet1.eat());


// inheritance

class Dog extends Animal{

}

const dog1 = new Dog("cherry",9);
console.log(dog1);
console.log(dog1.about());