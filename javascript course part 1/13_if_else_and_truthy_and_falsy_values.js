// falsy values

// false
// 0
// ""
// null
// undefined


// truthy values

// "abc"
// 1
// -1


// program to find num is even or odd using if else

let num = -1;
if (num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

// use of falsy values in if else

let num1;   // num1 has undefined.
if (num1){
    console.log("num1 has truthy value");
}
else{
    console.log("num1 has falsy value");
}

