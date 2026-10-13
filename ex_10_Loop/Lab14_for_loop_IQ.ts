let i:number;

for(i=10; i>=1; i--){
    console.log(i);
}
console.log(i);

//If I declare the variable i globally using the let keyword, and then declare another i locally inside a for loop, they are treated as two separate variables. When I try to print i after the loop, it shows an error because the global and local i are distinct and scoped differently.
//If I remove the let keyword inside the for loop, then the loop will continue using the globally declared variable i. In that case, the i inside the loop is not a new variable
