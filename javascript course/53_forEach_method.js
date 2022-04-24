// for each method will first pass number of array and then pass index of that number as an argument.

const users = [
    {firstName : "harshit",age : 22},
    {firstName : "mohit", age : 20},
    {firstName : "rohit", age : 21},
    {firstName : "aman", age : 19}
];

users.forEach(user => console.log(user.firstName));
