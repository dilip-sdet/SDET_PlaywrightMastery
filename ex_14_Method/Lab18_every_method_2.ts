let num:Array<number> = [1,2,3,4,5,6,7,8,9,10]
let isNumberMultipleOf3 = num.every((value):boolean=>{
    return value%3===0;
})

console.log(isNumberMultipleOf3);