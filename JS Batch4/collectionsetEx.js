
let s=new Set();
s.add(1); //ADDING THE ELEMENT
s.add(2);
s.add(3);
for(var i=1;i<=10;i++){
s.add(i);
}
console.log(s);

//CHECK WHEATHER ELEMENT EXISTS
console.log(s.has(5));
console.log(s.has(25));
 
//ARRAY METHOD TO CHECK TRUE OR FALSE OF ELEMENT
let arr=[1,2,3,4,5,6];
console.log(arr.includes(2));
console.log(arr.includes(15));

//DELETING THE ELEMENT
console.log("before",s);
s.delete(5);
console.log("after",s);

//LENGTH OF THE SET
let s1=new Set([1,2,3,4,5,4,3,6,1]);
console.log(s1);
console.log(s1.size);
////CLEAR METHOD TO REMOVE ALL ELEMENT IN THE SET
console.log(s1.clear()); //-->undefined
s1.clear(); 
console.log(s1);