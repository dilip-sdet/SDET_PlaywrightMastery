function sumOf2Number(a:number, b:number):number{
    let sum = a + b;
    return sum;
}

function subOf2Number(a:number, b:number):number{
    let sub = a - b;
    return sub;
}

function mulOf2Number(): void{
    let mul = 10*20;
    console.log(`Multiplication of 2 number is ${mul}`);
}

function divOf2Number(c:number, d:number): void{
    let div = c/d;
    console.log(`Division of 2 number is ${div}`);
}

let sum = sumOf2Number(10,20);
console.log(`The sum of 2 number is ${sum}`);
let sub = subOf2Number(20,10);
console.log(`The substraction of 2 number is ${sub}`);
mulOf2Number();
divOf2Number(20,10);
