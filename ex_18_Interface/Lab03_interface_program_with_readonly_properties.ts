interface Employee{
    readonly empID:number;
    designation: string;
    displayJobRole():void;
}

let emp1:Employee={
    empID:61081244,
    designation:"Senior QA Engineer",
    displayJobRole():string{
        return `My employee ID is ${this.empID}. My job designation is ${this.designation}`;
    }
}

console.log(emp1.displayJobRole());
console.log(emp1.empID);
console.log(emp1.designation);
console.log("------------I am changing designation-----------");
emp1.designation="Automation Tester";
console.log(emp1.designation);
console.log("------------I am changing empID-----------");
emp1.empID=61081245; //in compile time, I can see we cannot reassign readonly propety. But in output, its got assigned and printed the result
console.log(emp1.empID);