const user1 = {
    firstName : "archit",
    age : 8,
    about : ()=> {
        console.log(this.firstName,this.age);
    }
}
// this will give undefined and undefined
user1.about();

// bcz arrow function take this from surroundings (one level up).
user1.about.call(user1); // cannot change this
