const person={
    "full name":"vaishu",
    "age@":22,
    "job":"software",
    "badluck":true
}
console.log(person["full name"]);
console.log(person["age@"]);
console.log(person["job"]);//clg(person.job)
//dynamic variable
const myjob="job";
person.myjob;
console.log(person[myjob]);
//adding 
person["gender"]="Female";
console.log(person);
// updating
person["age"]=23;
console.log(person);
// deleting
delete person["badluck"];
console.log(person);