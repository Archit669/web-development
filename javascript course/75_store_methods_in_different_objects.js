// it has problem that if want to add new methods we have to 
// update it in usermethods and createuser function

const userMethods= {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return (this.age >=18);
    }
}

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}

user1 = createUser("archit","jain","architjain669@gmail.com","19","address1");
console.log(user1);