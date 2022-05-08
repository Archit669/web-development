// every method will return boolean if for every element of 
// array callback function return true.
// callback function of everymethod should return boolean.

const userCart = [
    {productId : 1 , productName : "mobile" , price : 12000},
    {productId : 2 , productName : "TV" , price : 20000},
    {productId : 3 , productName : "laptop" , price : 30000},  
];

const res = userCart.every(user => user.price < 40000);
console.log(res);