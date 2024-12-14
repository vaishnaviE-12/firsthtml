let arr=[1,3,6,8,4,9];
let big=arr[0];
arr.forEach((cv)=> {
    if(cv>big){
      big=cv;
    }
})
console.log(`biggest element from the array is ${big}`);
//SMALLEST ELEMENT
let small=arr[0];
arr.forEach((cv)=>{
    if(cv<small){
      small=cv;
    }
})
console.log(`smallest element from the array is ${small}`);
//SUM ELEMENT
let sum=arr[0];
arr.forEach((cv)=>{
    if(cv=sum){
      sum=sum+cv;
    }
})
console.log(`sum element from the array is ${sum}`);
//ODD INDEX ELEMNTS
arr.forEach((cv,i,arr)=>{
if(i%2!==0){
    console.log(cv);
}
})
//PRIME NUMBERS
arr.forEach((cv)=> {
    let n=cv;
    let count=0;
    for(var i=1;i<n;i++){
if(n%i===0){
    count++;
}
    }
    if(count===2){
        console.log(`prime element from the array is:${n}`);
    }
  
  } ) 
  // MULTIPILCATION ELEMENT BY 2
  arr.forEach((cv,i,arr)=> {
   cv=cv*2;
   console.log(cv);
  })
  //console.log(arr);
//BY THIS THE OPERATION FOREACH METHOD WON'T EFFECT THE ORIGINAL ARRAY 

//EVEN NUMBER
const even=arr.forEach((cv)=> {
    if(cv%2===0){
        return cv;
    }
})
console.log(even); //FOREACH RETURNS ANYTHING OR NOTHING
 // PUSHING EVEN NUMBER
 let newArr=[];
 arr.forEach((cv)=> {
    if(cv%2===0){
        newArr.push(cv);
    }
})
console.log(newArr);
 