interface Animal{
    pet_name:string;
}

interface Dog extends Animal{
    color:string;
}

let mypet:Dog={
    pet_name:"Tommy",
    color:"White"
}
console.log("My pet name is ", mypet.pet_name);
console.log("Its color is ", mypet.color);