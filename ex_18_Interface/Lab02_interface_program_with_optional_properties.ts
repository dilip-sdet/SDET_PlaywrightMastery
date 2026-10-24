interface Person{
    name:string;
    emp_number:number;
    designation?:string;
}

let employee:Person={
    name:"Dilip Kumar K",
    emp_num:123,
    designation:"Automation Tester"
}

console.log(employee.designation);
console.log(employee.emp_num);
console.log(employee.name);