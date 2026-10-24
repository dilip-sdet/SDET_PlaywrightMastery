interface Employee{
    empID:number,
    getDetails():string
}

class MyDetails implements Employee{
    empID:number;
    designation:string;
    constructor(empID:number, designation:string){
        this.empID=empID;
        this.designation=designation;
    }
    getDetails():string{
        return `My employee ID is ${this.empID}. My designation is ${this.designation}`;
    }    
}

let details = new MyDetails(61081244, "Automation Tester");
console.log(details.getDetails());
console.log(details.empID);
console.log(details.designation);
