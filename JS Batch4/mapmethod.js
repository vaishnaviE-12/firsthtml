let fruits=["apple","banana","orange","mangoes"];
let UpperCase=fruits.map((cv) =>{
return cv.toUpperCase();
})
console.log(UpperCase);
// UPPERCASE
  let LowerCase=fruits.map((cv)=>{
      if(cv.length>5){
          return cv.toLowerCase();
      }

//  let b=a.filter((cv)=>{
//     if(cv%2===0){   //MULTIPLES BY TWO
//         return cv;
//     }
//  })
//  console.log(b);
//   let c=b.filter((cv)=>cv%4
     
  })
  console.log(LowerCase);
//  //METHOD CHANGING
 let arr=[1,2,3,4,5];
 const arrTwo=arr.map(cv=>{return cv*2});
 console.log(arrTwo);
 const arrThree=arrTwo.map(cv=>{return cv*3});
 console.log(arrThree);
 //map method changing
 const newarr=arr.map(cv=>cv*2).map(cv=>cv*3).map(cv=>cv*5).map(cv=>cv+5);
 
//  //FOREACH METHOD
 let arr1=[2,3,5,6,1];
//   const newarr1=arr1.forEach(cv=>cv*2).forEach(cv=>cv*3).forEach(cv=>cv+5);
//   console.log(newarr1);
//
 const arr2=arr1.map((cv)=>{
    console.log(cv*2);
 })

 const arr3=arr2.map((cv)=>{
    console.log(cv*2);
 })
 console.log(arr2);

 //FILTER METHOD
 let a=[1,2,3,4,5,6,7,8,9];
 let b=a.filter((cv)=>{
        if(cv%2===0){   //MULTIPLES BY TWO
             return cv;
         }
      })
      console.log(b);
       let c=b.filter((cv)=>cv%4)
          
 console.log(c);
 //
 const d=a.filter(cv=>cv%2).filter(cv=>cv%4);
 console.log(d);
 //
let e=[1,2,3,4,5,6,7,8,9,10,11,12];
arr.map((cv)=>{
    return cv*2;
})
.map(cv=>cv*4)
.filter(cv=>cv%6===0)
.forEach(cv=>{
    console.log(cv);
})
