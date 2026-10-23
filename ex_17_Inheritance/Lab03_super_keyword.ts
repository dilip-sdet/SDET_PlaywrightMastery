class Parent{
    value:number=20;
    constructor(){
        console.log("Parent Constructor");
    }
    display(){
        console.log("Parent Display Method");
    }
}

class Child extends Parent{
    value: number = 100;
    constructor(){
        console.log("Child Constructor");
        super();
    }
    valueprint(){
        console.log(this.value);
    }
    display(){
        super.display();
        console.log("Child Display Method");
    }
}

let c1 = new Child();
c1.valueprint();
c1.display();

