let num:Array<number>=[1,2,3,4,5,6,7,8,9,10];
let evenNumber = num.filter((value):boolean=>{
    return value%2===0;
})
console.log(evenNumber);