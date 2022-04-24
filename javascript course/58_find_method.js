// callback function should return boolean
// will pass element and its index in callback function.

const users = [
    {userId : 1 , userName : "archit"},
    {userId : 2 , userName : "mohit"},
    {userId : 3 , userName : "somil"}
]

const ans = users.find(user => user.userId===3);
console.log(ans);