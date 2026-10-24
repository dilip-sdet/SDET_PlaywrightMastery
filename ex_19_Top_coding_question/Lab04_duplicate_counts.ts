let str:string = "Automation";
let str1=str.toLowerCase();
let count:number = 0;
for(let i=0;i<=str1.length-1;i++){
    for(let j=i+1; j<=str1.length-1;j++){
        if(str1.charAt(i) === str1.charAt(j)){
            count++;
        }
    }
}
console.log("The number of duplicates is ", count);