let a=10;
let b=a;
b=b+20;
console.log(a);
console.log(b);

//CALL BY VALUE
function test(x){
    x=x+30;
    console.log("x value inside the function",x);
}
let x=25;
test(x);
console.log("value outside the function",x);

//CALL BY REFERENCE
let c=[10,20,30,40];
let d=c;
console.log("c",c);
console.log("d",d);
d.push(60);
d.unshift(70);
console.log("After modified");
console.log("c",c);
console.log("d",d);