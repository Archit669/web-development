// const user1 = {
//     firstName : "archit",
//     age : 8,
//     about : function(){
//         console.log(this.firstName,this.age);
//     }
// }

// short syntax for methods
const user1 = {
    firstName : "archit",
    age : 8,
    about(){
        console.log(this.firstName,this.age);
    }
}
user1.about();