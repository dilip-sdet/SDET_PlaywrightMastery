function marriage(name:string):string;
function marriage(age:number):string;
function marriage(isMarried:boolean):string;

let marriage = (param: string | number | boolean):any =>{
    if(typeof param === "string"){
        return `I am ${param}`;
    }else if(typeof param === "number"){
        return `Currently my age is ${param}`;
    }else{
        let status:string = param? "married":"unmarried";
        return status;
    }
}

console.log(marriage("Dilip Kumar K"));
console.log(marriage(32));
console.log(marriage(false));
