type Batsman = {
    best_batsman : string,
    batsman_runs : number,
}

type Bowler = {
    best_bowler : string,
    bowler_wickets : number,
}

type Allrounder = {
    best_allrounder : string,
    catches : number,
    all_rounder_wickets : number,
    all_rounder_runs : number,
}

type GoatOfAll = Batsman & Bowler & Allrounder & {
    bestAllRounder:()=>string,
    bestBatsman:()=>string,
    bestBowler:()=>string,
}

let player:GoatOfAll=
{
    best_batsman: "Sachin",
    best_bowler: "Bumrah",
    best_allrounder: "Jadeja",
    batsman_runs: 15000,
    bowler_wickets: 500,
    catches: 200,
    all_rounder_runs: 5000,
    all_rounder_wickets: 250,
    bestAllRounder: function():string{
        return `${this.best_allrounder} has picked ${this.all_rounder_wickets} wickets and scored ${this.all_rounder_runs} runs`;
    },
    bestBatsman: function():string{
        return `${this.best_batsman} has scored ${this.batsman_runs} runs`;
    },
    bestBowler:function():string{
        return `${this.best_bowler} has picked ${this.bowler_wickets} wickets`;  
    },
}

console.log(player.bestAllRounder());
console.log(player.bestBatsman());
console.log(player.bestBowler());