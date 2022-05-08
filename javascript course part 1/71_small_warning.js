const user1 = {
    firstName : "harshit",
    age : 8,
    about : function(){
        console.log(this.firstName,this.age);
    }
}

// don't do this mistake
// user1.about()
myfunc = user1.about;
myfunc(); // this will give undefined undefined

// here this has lost.
// so we have to bind this 

myfunc = user1.about.bind(user1);
myfunc();