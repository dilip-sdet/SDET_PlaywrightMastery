let fruits:Array<string> = ["Mango", "Orange", "Apple", "Banana"];
let numbers:number[] = [1,2,3,4,5];
let even:number[] = [2,4,6,8,10];
let odd:number[] = [1,3,5,7,9];

let combinedNumbers = numbers.concat(even,odd);
let combinedFruits = fruits.concat(["carrot", "Beans", "Beetroot"], ["Chicken", "Mutton", "Fish"]);

console.log(combinedNumbers);
console.log(combinedFruits);