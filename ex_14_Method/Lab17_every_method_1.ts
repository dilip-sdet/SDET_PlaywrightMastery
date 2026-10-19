let num:Array<number> = [1,2,3,4,5,6,7,8,9,10]
let isNumberHasPositive = num.every((value):boolean=>{
    return value>0;
})

console.log(isNumberHasPositive)