let programName:string = "Module Program";

let sum = function(){
    let addition = 20+30;
    console.log(addition);
}

class Display{
    getDetails(){
        console.log("I have exported the Variable, method amd class");
    }
}
let d=new Display();
d.getDetails();
sum();