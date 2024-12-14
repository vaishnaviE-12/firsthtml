const person={
    name:"vaishu",
    age:23,
    gender:"female"
} 
console.log(person.name);
console.log(person.age);
console.log(person);  //
//(or)
const fullname=person.name;
console.log(fullname);
//
console.log("name="+person.name+";");
console.log("age="+person.age+";");
console.log("gender="+person.gender+";");
// adding new property
console.log(person);
person.job="Full Stack Developer";
console.log(person);
//updaate property
person.age="22";
console.log(person);
//delete property
delete person.job;
console.log(person);