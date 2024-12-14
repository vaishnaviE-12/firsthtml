 
const person={
    name:"Vaishu",
    age:21,
    gender:"Female",
    
}
const prototype1={
    walk:()=>{
        console.log("I am walking method,from prototype");
    }
}

person.__proto__=prototype1;
person.walk();