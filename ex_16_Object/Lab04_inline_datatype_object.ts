let employee:{
    name:string,
    company:string,
    emp_ID:number,
    designation:string,
    getDetails:()=>void       
}
= {
    name:"Dilip Kumar K",
    emp_ID:61081244,
    designation:"Senior QA Engineer",
    company:"LTM",
    getDetails:function(){
        console.log(`I am ${this.name} of ${this.emp_ID} working as a ${this.designation}`);
        }
    }
console.log(employee.company);
console.log(employee["designation"]);
employee["getDetails"]();
employee.getDetails();
employee.company="Oracle";
employee["designation"]="Automation Engineer";
console.log(employee.company);
console.log(employee["designation"]);