let employee = {  //we should not specify "object". because, we can access any variables and method
    name:"Dilip Kumar",
    empID:61081244,
    designation:"Senior QA Engineer",
    company:"LTM",
    getDetails:function():string{
        //let name = "Hai";
        return `I am ${this.name} working in ${this.company}. My employee ID is ${this.empID}, working as ${this.designation}`;
    }
}

console.log(typeof employee);
console.log(employee["getDetails"]());
console.log(employee["company"]);
console.log(employee["designation"]);
console.log(employee["empID"]);
console.log(employee["name"]);
employee.company="Oracle";
employee["designation"]="Automation Engineer";
console.log(employee.company);
console.log(employee["designation"]);