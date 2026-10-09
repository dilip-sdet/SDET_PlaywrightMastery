function animalSound(){
    if(true){
        let average_animal="Fox";
        var pet_animal="Dog";
        const wild_animal="Tiger";
        console.log(average_animal);
        console.log(pet_animal);
        console.log(wild_animal);
    }
    // console.log(average_animal); // Cannot access the let keyword of average_animal in outside block scope
    console.log(pet_animal);
    // console.log(wild_animal); // Cannot access the const keyword of wild_animal in outside block scope
}

animalSound();