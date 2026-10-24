export let programName:string = "Module Program";

export let sum = function(){
    let addition = 20+30;
    console.log(addition);
}

export class Display{
    getDetails():string{
        return `I have exported the Variable, method amd class`;
    }
}
