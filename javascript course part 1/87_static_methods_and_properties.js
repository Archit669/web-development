class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static classInfo(){
        return "this is person class.";
    }
    static desc = "this is static property.";
}

const person1 = new Person("archit",19);
console.log(person1);

// static properties and method can only call by class itself.
console.log(Person.classInfo());
console.log(Person.desc);