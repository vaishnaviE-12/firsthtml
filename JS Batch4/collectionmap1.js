let m=new Map();
//ADDING THE ELEMENTS
m.set("name","vaishu");
m.set("age",23);
m.set("job","java developer");
console.log(m);
//HAS-->CHECKS ELEMENTS EXIST
console.log(m.has("name"));
console.log(m.has("salary"));
//DELETE()-->DELETING THE ELEMENTS
console.log("before",m);
m.delete("age");
console.log("after",m);
//SIZE-->LENGTH
console.log(m.size);
//CLEAR()-->CLEAR