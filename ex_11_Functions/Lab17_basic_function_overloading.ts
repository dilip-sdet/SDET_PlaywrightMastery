//Signature of function
function getInfo(id:number):number;
function getInfo(name:string);String;

function getInfo(param:number | string):string{
    if(typeof param === "number"){
        return(`The ID number is ${param}`);
    }else{
        return(`My name is ${param}`);
    }
        

}
console.log(getInfo("Dilip"));
console.log(getInfo(101));
