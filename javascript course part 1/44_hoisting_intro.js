console.log(sum(4,5)); // will work before function defination

function sum(a,b){
    return a+b;
}

// console.log(sum2(2,3));  // will cause error in case of function expression.

const sum2 = function(a,b){
    return a+b;
}


// console.log(sum3(2,3));  // will cause error in case of arrow function.

const sum3 = (a,b) => a+b;
