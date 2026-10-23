class Parent{
    public empID:number;
    protected designation:string;
    private salary:number;

    constructor(empID:number, designation:string, salary:number){
        this.empID=empID;
        this.designation=designation;
        this.salary=salary;
    }

    getDetails(){
        console.log(this.empID);
        console.log(this.designation);
        console.log(this.salary);
    }
}

class Child extends Parent{
    private company:string;

    constructor(empID:number, designation:string, salary:number, company:string){
        super(empID, designation, salary);
        this.company=company;
    }

    getAccessPermission(){
        console.log(this.company);
        console.log(this.empID);
        console.log(this.designation);
       // console.log(this.salary);   salary is private, so its not accessible in child class
    }
}

let c1=new Child(123, "Automation Engineer", 10000, "XYZ");
c1.getAccessPermission();
c1.getDetails();
