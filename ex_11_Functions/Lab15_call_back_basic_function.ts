let sum = (callback1:(startMsg:string)=>void, a:number, b:number, callback2:(endMsg:string)=>void):void=>{
    callback1("Execution is started");
    let value:number = a + b;
    console.log(value);
    callback2("Execution is ended");
}

let startProgram = (startMsg:string):void=>{
    console.log(startMsg);
}

let endProgram = (endMsg:string):void=>{
    console.log(endMsg);
}

sum(startProgram, 10, 20, endProgram)