// let and const are block scope 
// var is function scope

function myapp(){
    if (true){
        // let firstName = "harshit"; // will cause error
        var firstName = "harshit";
        console.log(firstName);
    }
    console.log(firstName);
}

myapp();