
// function for sum of two numbers
function sum(a,b){
    return (a+b);
}

console.log(sum(3,2));

// function to check given number is even or not.
function isEven(num){
    return num%2===0;
}

console.log(isEven(2));

// function for linear search.
array = [1,2,3,4,5];
target = 1
function search(array,target){
    for(let i = 0  ; i < array.length ; i++){
        if (array[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(search(array,target));