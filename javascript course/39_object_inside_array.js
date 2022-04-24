// it is very useful in real world applications
const users = [
    {userId : 1 , firstName : "harshit" , gender : "male"},
    {userId : 2 , firstName : "mohit" , gender : "male"},
    {userId : 3 , firstName : "jaya" , gender : "female"}
];

console.log(users);

// iteration through objects inside array.
for (let user of users){
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user["gender"]);
}