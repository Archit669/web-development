
// higher order functions
// convention to use callback here
function myfunc(callback){
    console.log(callback);
    callback();
}

function func2(){
    console.log("inside func 2");
}

myfunc(func2);