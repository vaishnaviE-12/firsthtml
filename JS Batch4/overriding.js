class Animal{
    sound(){
        console.log("I am sound");
    }
}
class Dog extends Animal{
    sound(){
        console.log("BOW BOW");
    }
}
class Cat extends Dog{
    sound(){
        console.log("MEWW MEWw");
    }
}
const d=new Dog();
const c=new Cat();
const a=new Animal();
d.sound();
c.sound();
a.sound();

