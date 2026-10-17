function overload(s1:string, s2:string):string;
function overload(num:number):number;

let overload = (param1 : string | number, param2: string):string | number =>{
    if(typeof param1 === "string"){
        return param1.concat(param2)
    }else{
        return param1*3
    }
}
console.log(overload("Dilip", "Kumar"));
console.log(overload(10));