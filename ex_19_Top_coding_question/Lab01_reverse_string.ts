let myName:string = "Dilip Kumar K";
let reverse:string="";
for(let i=myName.length-1;i>=0;i--){
    reverse=reverse.concat(myName[i]);
    //reverse=reverse + myName.charAt(i);
}
console.log("Reverse string is ", reverse);