// function expression for sum of two numbers
const sum = function (a,b){
    return (a+b);
}

console.log(sum(3,2));


// function expression to check given number is even or not.
const isEven = function (num){
    return num%2===0;
}

console.log(isEven(2));


// function expression for linear search.
array = [1,2,3,4,5];
target = 1
const search = function (array,target){
    for(let i = 0  ; i < array.length ; i++){
        if (array[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(search(array,target));