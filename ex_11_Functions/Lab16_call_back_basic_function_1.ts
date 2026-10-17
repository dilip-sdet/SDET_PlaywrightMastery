let value = (result:number):number=>{
    return result;
}

let sum = (a:number, b: number, callback:(result:number)=>number):void=>{
    let result = a+b;   
    console.log(callback(result)); 
}

sum(10, 20, value);
