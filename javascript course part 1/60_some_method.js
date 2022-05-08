// some method will return boolean if for atleast one element of array,
// callback function return true.
// callback function should return boolean.

const userCart = [
    {productId : 1 , productName : "mobile" , price : 12000},
    {productId : 2 , productName : "TV" , price : 20000},
    {productId : 3 , productName : "laptop" , price : 30000},  
];

const res = userCart.some(user => user.price < 13000);
console.log(res);

