for (let i = 0 ;  i< 3 ;  i++){
    console.log(i);
}

// console.log(i) // will give error bcz scope of variable i is only in block of for loop.


for (var i = 0 ; i < 3; i++){
    console.log(i);
}

console.log(i) // will not give error