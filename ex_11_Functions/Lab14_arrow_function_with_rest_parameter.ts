let sumOfMultipleNumbers = (...nums:number[]):void=>{
    let sum:number = 0
    for(let i=0;i<=nums.length-1;i++){
        sum = sum + nums[i];
    }
    console.log(sum)
}

sumOfMultipleNumbers(12, 13, 34, 54, 46);