let i:number;

for(let i=1; i<=10;i++);
console.log(i);

//Since the global variable i was declared with let but not assigned a value, it remains undefined. When you declare i again inside the for loop, that local declaration shadows the global one. After the loop ends, if you try to print the global i, it shows undefined because the global variable was never initialized.