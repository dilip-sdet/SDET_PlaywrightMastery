let num:Array<number>=[1,2,3,4,5,6,7,8,9,10];
let sumOfAllNumbers = num.reduce((total,value):number=>{
    return total+value;
},-5)

console.log(sumOfAllNumbers)