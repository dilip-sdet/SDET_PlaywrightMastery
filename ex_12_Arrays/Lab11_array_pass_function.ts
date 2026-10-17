let match = (num:number, arr:number[]):boolean =>{
    let count;
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i] === num){
            count = 1;
            break;
        }
    }
    if(count === 1){
        return true;
    }else{
        return false;
    }
}
let arr:Array<number> = [30,40,20,50];
console.log("Match result ",match(10,arr));