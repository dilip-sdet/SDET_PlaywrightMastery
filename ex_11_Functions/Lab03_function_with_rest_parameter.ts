function restParameter(...nums:number[]){
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum = sum + nums[i];
    }
    console.log(`The sum of given numbers is ${sum}`)
}

restParameter(1,2,3,4,5,6,7);
