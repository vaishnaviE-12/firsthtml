function test(callback){
    callback();
}
function abc(){
    console.log("Im a callback function");
}
test(abc);

//
function test1(callback){
    callback("vaishu");
}
function greet(name){
console.log("good morning",name);
}
test1(greet);

//
function check(even){
    even(8);
}
function even(n){
    if(n%2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
check(even);

// PRIME NUMBER
function num(isprime){
    isprime(3);
}
function prime(n){
let count=0;
for(let i=1;i<=n;i++){
    if(n%i===0){
     count=count+1;
    }
}
if(count===2){
    console.log(`{n} is prime`);
}
else{
    console.log(`{n} is not prime`); 
}
}
num(prime);

//PREFECT NUMBERS
function num(isprefect){
    isprefect(6);
}                          
function prefect(n){
let sum=0;
for(let i=1;i<=n;i++){
    if(n%i===0){
     sum=sum+i;
    }
}
if(sum===0){
    console.log(`{n} is prefect`);
}
else{
    console.log(`{n} is not prefect`); 
}
}
num(prefect);

//
function test(a,b,callback){
 console.log("num",a);
 console.log("name",b);
 callback(10,20,30);
}
function add(x,y,z){
    let sum=x+y+z;
    console.log(`sum=${sum}`);
}
test(23,"vaishu",add);

// 
function test(a,b,c,callback){
   return callback(a,b,c);
}
function add(x,y,z){
    let sum=x+y+z;
    return `sum=${sum}`;
}
var x=test(10,20,30,add);
console.log(x);