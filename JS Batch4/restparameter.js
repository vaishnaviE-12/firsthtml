function add(a1,a2,a3,a4,a5){
    let sum=a1+a2+a3+a4+a5;
    console.log(sum);
}
add(1,2,3,4,5);

// FOR LOOP
function add1(...abc){
    let sum=0;
    for(let i=0;i<abc.length-1;i++){
        sum=sum+abc[i];
    }
    console.log("sum using for loop",sum);
    let sum1=0;       //FOR
    for(let x of abc){
        sum1=sum1+x;
  }
    console.log("sum using for of",sum1);
    let sum2=0;
    for(let a in abc){
        sum2=sum2+abc[a];
    }
    console.log("sum using for in",sum2);
}
add1(10,20,30,40,50); 
/*let a="5";
let b=2;
console.log(a-b);
console.log(a+b);*/

//PRIME NUMBERS
let arr=[1,2,3,4,5];

let n=10;
let count=0;
for(let i=0;i<=n;i++){
    if(n%i===0){
        count=count+1;
    }
}
if(count===2){
    console.log(n);
}