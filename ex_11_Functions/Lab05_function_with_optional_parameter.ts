function myFamilyData(name:string, mob?:number, email?:string){
    console.log(`NAME: ${name}`);
    if(mob!=undefined){
        console.log(`MOBILE: ${mob}`);
    }
    if(email!=undefined){
       console.log(`EMAIL: ${email}`);
    }
}

console.log("--------My Mother Data-----------");
myFamilyData("Mother", 0);
console.log("-----------My Data--------------");
myFamilyData("Me", 0, "me@example.com");
console.log("--------My Brother Data-----------");
myFamilyData("Brother");
console.log("--------My Father Data-----------");
myFamilyData("Father", 0);