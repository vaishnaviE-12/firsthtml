class Vehicle{
    model;
    made;
    year;
    constructor(model,made,year){
        this.model=model;
        this.made=made;
        this.year=year;
    }
    launching(){
        console.log(`${this.model} is made in ${this.made} is going to launch in the year of ${this.year}`);
    }
    stopping(){
        console.log(`due to same reasons ${this.model} is going to shutdown in the year of ${this.year}`);
    }
}
    class Car extends Vehicle{
        modifying(){
            console.log(`modification of the car is completed`);
        }
        stopping(){
           // super.launching();
            console.log(`${this.model} is not going to stop its production is ${this.year}`);
        }
    }
    const v=new Vehicle('kia','india',2013);
    const c=new Car('tata','india',2000);
    v.launching();
    v.stopping();
    c.modifying();
    c.stopping();
    c.launching();
