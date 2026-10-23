class TypescriptCompany{
    emp_number:number;
    name:string;
    static designation:string;
    static welcomeMessage():string{
        return `Welcome to TypescriptCompany`;
    }


constructor(emp_number:number, name:string, designation:string){
    this.emp_number = emp_number;
    this.name = name;
    TypescriptCompany.designation = designation;
}

getDetails():string{
    return `I am ${this.name} joined "Typescript Company" with ${this.emp_number}. My Designation is ${TypescriptCompany.designation}.`;
}
}

let emp1 = new TypescriptCompany(61081244, "Dilip Kumar K", "Automation Engineer");
console.log(TypescriptCompany.welcomeMessage());
console.log(emp1.getDetails());