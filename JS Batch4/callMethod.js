//CALL() METHOD
/*function add(){
    let a=10;
    let b=20;
    console.log(a+b);
} */
////..............................
//EX1
/*add.call();
const person={
    fname:"Hero",
    lname:"zero",
    fullname:function(){
        console.log(this.fname+" "+this.lname);
    }
}
    const person1={
        fname:"Ameerpet",
        lname:"Technologies"
}
person.fullname.call(person1);*/
////................................................

//BIND METHOD//
/*function add(){
    console.log(10+20);
}
add.bind();
const sum=add.bind();
sum();*/
///................................
//EX1
const person={
    fname:"Hero",
    lname:"zero",
    fullname:function(){
        console.log(this.fname+" "+this.lname);
    }
}
    const person1={
        fname:"Ameerpet",
        lname:"Technologies"
}
const nameEx=person.fullname.bind(person1);
nameEx();
