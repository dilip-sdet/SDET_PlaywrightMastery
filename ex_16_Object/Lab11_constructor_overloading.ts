class ConstructorOverloading{
    constructor();  // default constructor
    constructor(a:number, b:number);  // parameterized constructor
    constructor(a?:number, b?:number){  // constructor implementation
        if(a&&b){
            console.log(a+b);
        }else{
            console.log("Default Constructor is invoked");
        }
    }
}

let co = new ConstructorOverloading();
let co1 = new ConstructorOverloading(10,20);
