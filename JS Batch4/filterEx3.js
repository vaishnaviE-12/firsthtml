 let arr=[1,1,4,5,1,4,6,7,3,2,6];
 const newArr=arr.filter((cv,i)=>{
     if(arr.indexOf(cv)===i){
         return cv;
     }
 })
 console.log(newArr);

// //
// const b=arr.filter((cv)=>{
//     if(arr.push(cv))
//     return cv=cv+20;
// })
// console.log(b);