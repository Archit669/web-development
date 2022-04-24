function addall(...numbers){
    let sum = 0;
    for (let number of numbers){
        sum+=number;
    }
    return sum;
}

console.log(addall(1,2,3,4,5,6,7,8,9,10));