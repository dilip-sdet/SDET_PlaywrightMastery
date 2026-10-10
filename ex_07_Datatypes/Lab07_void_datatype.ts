function sum():void{
    console.log(10+30);
}

function sub():number{
    return 30-10;
}

function mul(a:number, b:number): number{
    return a*b;
}

function div(a:number, b:number): void{
    console.log(a/b);
}

sum();
console.log(sub());
console.log(mul(10,20));
div(30,10);