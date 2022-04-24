// call method
function hello(){
    console.log("hello world");
}

hello.call();

const user1 = {
    firstName : "harshit",
    age : 8,
    about : function(instrument,band){
        console.log(`name is ${this.firstName} and age is ${this.age}.`);
        console.log(`fav insturment is ${instrument} and fav band is ${band}`);
    }
}
const user2 = {
    firstName : "mohit",
    age : 9,
}

user1.about("guitar","mozart");
// will give undefined , undefined.
user1.about.call(); 
user1.about.call(user2,"guitar","mozart");


// apply method
// apply method is like call but take argument as arrray
user1.about.apply(user1,["paino","bach"]);
user1.about.apply(["1","2"]);

// bind method
// it will return function which we can call
console.log("**********bind method **************");
const func = user1.about.bind(user2,"tabla","band");
func();