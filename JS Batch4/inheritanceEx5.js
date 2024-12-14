function Animal(name){
    this.name=name;
}
Animal.prototype.sayHello=function(){
    console.log("Hello....!"+this.name);
}
function Dog(name,breed){
    Animal.call(this,name);
    this.breed=breed;
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.bark=function(){
    console.log("bow....! bow.....!");
}
//Dog.prototype=Object.create(Animal.prototype);
const a=new Animal("Bunty");
const d=new Dog("chintu");
a.sayHello();
d.sayHello();
d.bark();

// inheritance Example2
function Student(sname){
    this.name=sname;
}
Student.prototype.sayHello=function(){
    console.log("I'm "+this.name);
}
function Person(Firstname,Lastname){
    Student.call(this,sname);
    this.Lastname=Lastname;
}