let mathProblem = (a:number, b:number, c:number):number=>{
    let result = a + (b*c);
    return result
}

let value=mathProblem(10,20,30);
console.log(`Symplification of math problem is ${value}`);