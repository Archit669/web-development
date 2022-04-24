// // this will give window object
// console.log(this);
// console.log (window);


// function myFunc(){
//     console.log("hello world");
// }

// myFunc();
// // it is the method of window object.
// window.myFunc();

"use strict";


function myFunc(){
    console.log(this);
}
// my func will give window object 
window.myFunc();

// if i use strict mode
// if i don't use strict mode then this will give me window object.
myFunc();