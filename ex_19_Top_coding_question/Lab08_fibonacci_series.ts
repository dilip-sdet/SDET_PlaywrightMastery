let a:number=0;
let b:number=1;
console.log(a);
console.log(b);
for(let i=0;i<=10;i++){
    let c = a+b;
    console.log(c);
    a=b;
    b=c;
}