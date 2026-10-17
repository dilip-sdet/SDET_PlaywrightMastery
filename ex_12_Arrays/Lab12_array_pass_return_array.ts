let upperCase = (arr:string[]):string[] =>{
    let result:Array<string> = [];
    for(let i=0;i<=arr.length-1;i++){
        result[i] = arr[i].toUpperCase();
    }
    return result;
}

let arr:Array<string>=["dilip", "hemanth", "lakshmi devamma", "krishnaiah"];
console.log(upperCase(arr));