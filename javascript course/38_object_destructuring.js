const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    onemorefamoussong :"sky",
    key4 : "something"

};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName);
// console.log(famousSong);

// shortcut

const {bandName , famousSong} = band;
console.log(bandName);
console.log(famousSong);


// name of variable of our choice

const {bandName:sname , famousSong :song} = band;
console.log(sname);
console.log(song);

// take object using destructuring

const {bandName:var1 , famousSong:var2 , ...rest} = band;
console.log(var1);
console.log(var2);
console.log(rest["key4"]);