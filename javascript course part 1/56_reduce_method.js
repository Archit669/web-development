// return one value.
// accumulator and currentValue are passed argument in callback function 

// realistic example of reduce method.
const userCart = [
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:24000},
    {productId:3,productName:"tv",price:36000}
];

const sum = userCart.reduce((totalsum,currentProduct) => {
    return totalsum+currentProduct.price
},0);
console.log(sum);