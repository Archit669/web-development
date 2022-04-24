// before es15
// function addTwo(a,b){
//     if (b==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }



// after es15

function addTwo(a,b=0){
    return a+b;
}

console.log(addTwo(3,4))