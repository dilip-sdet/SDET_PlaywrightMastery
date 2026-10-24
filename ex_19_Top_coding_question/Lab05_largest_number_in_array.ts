let num:Array<number> = [20,10,30,25,10];
let max:number = num[0];
for(let i in num){
    if(num[i]>max){
        max=num[i];
    }
}
console.log(max);