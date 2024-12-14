const person={
    name:"Vaishu",
    age:21,
    gender:"Female"
}
console.log(person);

const prototype1={
    walk:()=>{
        console.log("I am walking method,from prototype");
    }
}

prototype1.walk();
person.walk();
