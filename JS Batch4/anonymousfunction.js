const sayHello=function(){
     console.log("Hello");
 }
 sayHello();
// // without input and without return
 const small=function(){
     const a=20;
     const b=30;
     const c=40;
     if(a<b && a<c){
        console.log("a is smallest");
    }
     else if(b<a && b<c){
        console.log("b is smallest");
     }
     else{
         console.log("c is smallest");
     }
 }
 small();
  
// //equailty operator
 console.log(1=="1");
 console.log(1==="1");// strict equailty operator//
  
// with input and without return
const findTypeOf=function(a){
    if(typeof a ==='number'){
    console.log(a+"is number");
    }
    else if(typeof a==='boolean'){
        console.log(a+"is boolean"); 
    }
    else if(typeof a==='string'){
        console.log(a+"is string");
    }
    if(a.length>1){
        console.log(a+" is word");
    }
    else{
        console.log(a+" is letter");
    }
}
findTypeOf(9);
findTypeOf(true);
findTypeOf(false);
findTypeOf("hii");
findTypeOf("A");

// multipication
//const mulOf= function(n){
    //}
    
    //without input and with return
    const result=function(){
        let a=10;
        let b=20;
        let sum=a+b;
        return "sum of given numbers"+sum;
    }
    const ans=result();
    console.log(ans); // (or)console.log(result());
    
    // sum of even number
    const evenSum=function(){
        let sum=0;
        for(var i=0;i<=10;i++){
            if(i%2===0){
                sum=sum+i;
            }
        }
        return sum;
    }
    console.log(evenSum());

    // with input and with return
    const evenOrOdd=function(n){
        if(n%2===0){
            return n+"is even";
        }
        else{
            return n+"is odd";
        }
    }
    console.log(evenOrOdd(8));

    // prime number
    const prime=function(n){
    let count=0;
    for(var i=1;i<=n;i++){
        if(n%i===0){
            count=count+1;
        }
    }
    if(count===2){
        return n+"is prime";
    }
    else{
        return n+"is not prime";
    }
    }
    console.log(prime(7));
