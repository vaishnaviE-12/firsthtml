// if(null){
//     console.log("null");
// }
// if(false){
//     console.log("im xyz");
// }
//  if({ }){
//      console.log("Empty space");
//  }
//  if([]){
//     console.log("empty space");
//  }

 ////FILTER METHOD
 let arr=[1,2,3,4,5,6,7,8,9];
 let EvenArr=arr.filter((cv)=>cv%2)
   console.log(EvenArr); 
   //////
   let evenarr1=arr.filter((cv)=>{
    if(cv%2){
        return cv;
    }
   })
   console.log(evenarr1);

   ///
//    let num=[23,45,65,7,3,6,87];
//    num.map(cv=>cv%2).map(cv=>cv%4).filter(cv=>{

//    })

