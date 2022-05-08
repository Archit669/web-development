class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get FullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set FullName(fullName){
        const [firstName ,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("archit","jain",19);
// now can use as a property
console.log(person1.FullName);
person1.FullName = "mohit jain";
console.log(person1.FullName);