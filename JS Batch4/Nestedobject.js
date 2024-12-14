const person={
    name:"vaishu",
    age:23,
    course:"java",
    address:{
        city:"Ameerpet",
        state:"Telangana",
        country:"India",
        "my city":"Hyd",
        "@my pincode":50035
    }
}
console.log(person.address.city);
//
console.log("city="+person.address.city);
console.log("state="+person.address.state);
console.log("country="+person.address.country);
//dot object
// adding 
person.address.pincode=50052;
console.log(person);
// update
person.address.city="Hyderabad";
console.log(person);
//delete
delete person.course;
console.log(person);
// bracket object
//adding
person[""]