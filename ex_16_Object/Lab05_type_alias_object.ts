type biodata={
    name:string;
    empID:number;
    designation:string;
    company:string;
    getDetails:()=>string;
}

let employee_1:biodata =
{
    name: "Dilip Kumar K",
    empID: 61081244,
    designation: "Senior QA Engineer",
    company: "LTM",
    getDetails: function():string{
        return `I am ${this.name} of ${this.empID} working as a ${this.designation}`;
    }
}
let employee_2:biodata =
{
    name: "Hemanth Kumar K",
    empID: 61081245,
    designation: "Senior QA Engineer",
    company: "LTM",
    getDetails: function():string{
        return `I am ${this.name} of ${this.empID} working as a ${this.designation}`;
    }
}

console.log(employee_1.company);
console.log(employee_1.empID);
console.log(employee_1.designation);
console.log(employee_1.name);
console.log(employee_1.getDetails())
console.log(employee_2.company);
console.log(employee_2.empID);
console.log(employee_2.designation);
console.log(employee_2.name);
console.log(employee_2.getDetails())

console.log("------------new access approach-------------");
console.log(employee_1["company"]);
console.log(employee_1["empID"]);
console.log(employee_1["designation"]);
console.log(employee_1["name"]);
console.log(employee_1["getDetails"]())
console.log(employee_2["company"]);
console.log(employee_2["empID"]);
console.log(employee_2["designation"]);
console.log(employee_2["name"]);
console.log(employee_2["getDetails"]());

console.log("---------Accessing the variable---------");
for(let i in employee_1){
    console.log(employee_1.company)
    console.log(employee_1["designation"]);
    console.log(employee_2.empID);
} // for loop is not valid for accessing the value, because, in employee 1, its possible to access the employee 2 data