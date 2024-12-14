function greet(){
    const name="hero";
    return "hello:"+name;
}
const message=greet();
console.log(message);

// find factorial
function fact(){
let n=5
let fact=1;
for(var i=n;i>=1;i--){
    fact=fact*i;
}
return fact;
}
const factorialvalue=fact();
console.log(factorialvalue);