class Animal{
    name;
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("Hello..."+this.name);
    }
}
class Dog extends Animal{
    name;
    breed;
    constructor(name,breed){
        super(name);
        this.name=name;
        this.breed=breed;
    }
    bark(){
        console.log("bow...!bow...!");
    }
}
    const c= new Animal("puppy");
    const d=new Dog("chintu","streetdog");

c.sayHello();
d.sayHello();
d.bark();