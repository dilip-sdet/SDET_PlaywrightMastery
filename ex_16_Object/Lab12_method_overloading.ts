class MethodOverloading{
    sum(a:number, b:number):number;
    sum(a:number,b:number,c:number):number;
    sum(a:number, b:number,c?:number):number{
        if(c){
            return a+b+c;
        }else{
            return a+b;
        }
    }
}
let value = new MethodOverloading();
console.log(value.sum(10,20,30));
console.log(value.sum(10,20));