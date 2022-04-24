// and or operator

// && is a and operator

myName = "archit";
age = 19;

// if both the condition are true then if block will execute.
// in && if first condition is false then it will not check second condition
if (age>=18 && myName[0] == 'a'){
    console.log("inside if");
}
else{
    console.log("inside else");
}

if (age>=18 && myName[0] == 'b'){
    console.log("inside if");
}
else{
    console.log("inside else");
}


// || is a or operator.

// if atlesst one of  the condition are true then if block will execute.
// in || if first condition is true then it will not check second condition

if (age>=18 || myName[0] == 'b'){
    console.log("inside if");
}
else{
    console.log("inside else");
}

if (age>=30 || myName[0] == 'b'){
    console.log("inside if");
}
else{
    console.log("inside else");
}