console.log(this);
console.log(window);
console.log(myFunction);
myFunction(); 
// can call before decleration bcz during creation of global execution context , it stored in memory

console.log(fullName); 

function myFunction(){
    console.log("this is my function");
}

var firstName = "harshit";
var lastName = "sharma";
var fullName = firstName + " " + lastName;
console.log(fullName); 
  