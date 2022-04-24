const users = [
    {userId : 1 , firstName : "harshit" , gender : "male"},
    {userId : 2 , firstName : "mohit" , gender : "male"},
    {userId : 3 , firstName : "jaya" , gender : "female"}
];

const [user1,user2,user3] = users;
console.log(user1);

const [{firstName: user1firstname, gender:user1gender}, , {gender}] = users;
console.log(user1firstname);
console.log(user1gender);
console.log(gender);