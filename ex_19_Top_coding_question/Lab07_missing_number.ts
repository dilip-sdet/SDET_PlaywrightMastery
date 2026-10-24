let missingNumber = (n:number):number=>{
    let arr:Array<number> = [1,2,4,5,6];
    let expectedValue = (n*(n+1))/2;
    let actualValue = arr.reduce((function(total,num):number{
        return total + num
    }))
    let difference = expectedValue - actualValue;
    console.log("Missing number is ", difference);
}
missingNumber(6);
