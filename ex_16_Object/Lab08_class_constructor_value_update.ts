class OfficeDetails{
    empID:number;
    company:string;
    designation:string;
    firstName:string;
    lastName:string;
constructor(empID:number, company:string, designation:string, firstName:string, lastName:string){
    this.empID = empID;
    this.company = company;
    this.designation = designation;
    this.firstName = firstName;
    this.lastName = lastName;
}
getName=():string=>{
    return `Candidate name ${this.firstName} ${this.lastName}`;
}
getDetails=():string=>{
    return `I am ${this.getName()}. My employee ID is ${this.empID}. I have worked in ${this.company} with designation ${this.designation}`;
}
}
let employee1 = new OfficeDetails(61081244, "LTM", "Senior QA Engineer", "Dilip", "Kumar");
console.log(employee1.getName());
console.log(employee1.getDetails());
console.log(employee1["company"]);
console.log(employee1["designation"]);
console.log(employee1.empID);
console.log(employee1.firstName);
console.log(employee1.lastName);
console.log("---------Changing Value----------");
employee1.company="Oracle";
employee1.designation="Automation Tester";
console.log(employee1.getName());
console.log(employee1.getDetails());