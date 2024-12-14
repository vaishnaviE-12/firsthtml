let Person={
    name:"vaishu",
    age:23,
    gender:"Female"
}
for(let x in Person){
  console.log(Person[x]);
}
/* FOR OF AND FOR LOOP CANNOT BE USED TO LITERAL OBJECT
for(let y of Person){
    console.log(y);
}*/