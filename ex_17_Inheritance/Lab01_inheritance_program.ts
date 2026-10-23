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

class Deer extends AnimalBehavior{
    run_speed:number;

    constructor(eat:string, color:string, weight:number, run_speed:number){
        super(eat, color, weight);
        this.run_speed = run_speed;
    }

    sound(){
        console.log("Deer barks");
    }

    forest(){  // Method Overiding
        console.log("Siberian Taiga");
    }
}

class Dog extends AnimalBehavior{
    run_speed:number;

    constructor(eat:string, color:string, weight:number, run_speed:number){
        super(eat, color, weight);
        this.run_speed = run_speed;
    }

    sound(){
        console.log("Dog bows");
    }

    forest(){  //// Method Overiding
        console.log("Black Forest");
    }
}
let animal_Tiger = new Tiger("Meat", "Safron", 100, 200);
let animal_Deer = new Deer("Grass", "Orange", 100, 175);
let animal_Dog = new Dog("Bone", "White", 15, 150);

console.log("----------Tiger----------")
animal_Tiger.forest();
animal_Tiger.sound();
console.log(`Tiger color is ${animal_Tiger.color}`);
console.log(`Tiger eats ${animal_Tiger.eat}`);
console.log(`Tiger wight is ${animal_Tiger.weight}`);
console.log(`Tiger runs at a speed of ${animal_Tiger.run_speed}`)
console.log("----------Deer----------")
animal_Deer.forest();
animal_Deer.sound();
console.log(`Deer color is ${animal_Deer.color}`);
console.log(`Deer eats ${animal_Deer.eat}`);
console.log(`Deer wight is ${animal_Deer.weight}`);
console.log(`Deer runs at a speed of ${animal_Deer.run_speed}`)
console.log("----------Dog----------")
animal_Dog.forest();
animal_Dog.sound();
console.log(`Dog color is ${animal_Dog.color}`);
console.log(`Dog eats ${animal_Dog.eat}`);
console.log(`Dog wight is ${animal_Dog.weight}`);
console.log(`Dog runs at a speed of ${animal_Dog.run_speed}`)
