let a=[10,20,30,40];
let b=[...a];
console.log(a);
console.log(b);
b.unshift(80);
b.push(50);
console.log("after modified");
console.log(a);
console.log(b);

// WITH OBJECT
const Person={
    name:"vaishu",
    age:23,
}
let Details={...Person} 
Details.gender="female";
console.log(Person);
console.log(Details);

//WITH SPREAD OPERATOR
let arr=["banana","orange","apple"];
let copyarr=[...arr];
console.log(arr===copyarr);

//WITHOUT SPREAD OPERATOR
let arr1=["banana","orange","apple"];
let copyarr1=arr1;
console.log(arr1===copyarr1);
