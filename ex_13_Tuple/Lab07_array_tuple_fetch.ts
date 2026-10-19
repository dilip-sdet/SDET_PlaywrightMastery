let bowlers:[number, string][] = [[11, "Jasprit Bumrah"], [23, "Arshdeeo Singh"]];

console.log(bowlers[0]);
console.log(bowlers[1]);

for(let i=0; i<=bowlers.length-1;i++){
    console.log(bowlers[i]);
}

for(let i=0; i<=bowlers.length-1;i++){
    for(let j=0;j<=bowlers[i].length-1;j++){
            console.log(bowlers[i][j]);
    }
}