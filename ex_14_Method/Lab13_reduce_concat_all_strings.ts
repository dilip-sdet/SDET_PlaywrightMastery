let myName:Array<string> = ["Dilip", "Kumar", "K" ];
let empName = myName.reduce((name,value):string=>{
    return name+" "+value;
})

console.log(empName);