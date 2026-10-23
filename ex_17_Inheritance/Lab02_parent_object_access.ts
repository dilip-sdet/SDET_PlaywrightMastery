class AnimalBehavior{
    eat:string;
    color:string;
    weight:number;

    constructor(eat:string, color:string, weight:number){
        this.eat=eat;
        this.color=color;
        this.weight = weight;
    }
    
    forest(){
        console.log("Forest");
    }
}

class Tiger extends AnimalBehavior{
    run_speed:number;

    constructor(eat:string, color:string, weight:number, run_speed:number){
        super(eat, color, weight);
        this.run_speed = run_speed;
    }

    sound(){
        console.log("Tiger roars");
    }

    forest(){  // Method Overiding
        console.log("Congo Rainforest");
    }
}

let animal:AnimalBehavior = new Tiger("Meat", "Safron", 100, 200);
console.log("----------Tiger----------")
animal.forest();
animal.sound(); //method is not present in child class, so we are finding the error. but at the time of execution, code gets executed
console.log(`Tiger color is ${animal.color}`);
console.log(`Tiger eats ${animal.eat}`);
console.log(`Tiger wight is ${animal.weight}`);
console.log(`Tiger runs at a speed of ${animal.run_speed}`);  //method is not present in child class, so we are finding the error. but at the time of execution, code gets executed

