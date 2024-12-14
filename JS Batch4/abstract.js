class Shape{
    calculateArea(){
       // throw new Error("Abstract method");
       console.log("Abstract method");
    }
}
class Circle extends Shape{
//constructor(){
    constructor(radius){
   super();
   this.radius=radius;
}
 area(){
    var area=3.14*this.radius*this.radius;
    console.log(area);
 }
 

sayHello(){
    console.log("hello");
}
}
class Square extends Shape{
    constructor(side){
        super();
        this.side=side;
 }
 calculatesquare(){
    var area= this.side*this.side;
    console.log(`area of square is ${area}`);
 }
}
const c=new Circle(20);
//c.sayHello();
const s=new Square(40);
c.calculateArea();
c.area();
s.calculatesquare()