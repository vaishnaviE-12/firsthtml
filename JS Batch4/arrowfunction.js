const sayHello=()=>{         // arrow function explain
    console.log("Arrow function");
}
sayHello();

//without input and without return 
const factorOf=()=>{
    let n=10;
for(var i=1;i<=n;i++){
    if(n%i===0){
        console.log(i);
    }
}
}
factorOf();