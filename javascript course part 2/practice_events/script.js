const buttons = document.querySelectorAll('.btn');
console.log(buttons);

// for (let button of buttons){
//     button.addEventListener("click", function(){
//         this.style.background = "yellow";
//         this.style.color = "grey";
//         this.style.fontWeight = "bold";
//     });
// }


// using arrow functions
for(let button of buttons){
    button.addEventListener("click",(event)=>{
        event.target.style.background = "yellow";
        event.target.style.color = "black";
        event.target.style.fontWeight = "bold";
    });
}

