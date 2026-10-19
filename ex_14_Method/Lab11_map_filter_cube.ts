let num:Array<number>=[1,2,3,4,5,6,7,8,9,10];
let multipleOf3 = num.filter((value):boolean=>{
    return value%3===0;
})
let cubeOf3Series = multipleOf3.map((value):number=> value**3)
console.log(multipleOf3);
console.log(cubeOf3Series)