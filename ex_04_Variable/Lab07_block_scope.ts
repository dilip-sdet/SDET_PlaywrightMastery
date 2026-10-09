function animalSound(){
    if(true){
        console.log("Animal makes a sound");
        let animal="Dog";
        console.log(animal);
    }
    console.log("Animal makes a sound");
    // console.log(animal); Cannot access the let keyword of animal in outside block scope
}

animalSound();