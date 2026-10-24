let str:string = "Automation";
let count:number = 0
for(let i=0; i<=str.length-1;i++){
    let ch = str.charAt(i).toLowerCase();
    if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"){
        count++;
    }
}
console.log("The count of vowels is ", count);