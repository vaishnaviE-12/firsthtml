let arr=[1,2,3,4,5,6,7,8,9, 10];
arr.reduce((ac,cv,i,arr)=>{
    console.log(ac,cv,i,arr);
},10)

//...................................
const sum=arr.reduce((ac,cv)=>{
    return ac+cv;
},0)
console.log("sum of arr",sum);
//...........................
let Sum=0;
for(var i=0;i<=arr.length-1;i++){
    Sum=Sum+arr[i];
}
console.log(Sum);
//.............................
let arr1=[1,2,3];
let initialvalue=1;
const sum1=arr1.reduce((ac,cv)=>{
    return ac*cv;
},initialvalue)
    console.log(sum1);
    //LARGEST VALUE................
    let Largest=[1,3,56,34,10,55];
    let iv=0;
    const value=Largest.reduce((ac,cv)=>{
      if(cv>ac){
         ac=cv;
       }
      return ac;
    },iv)
    console.log(value);
    //MINIMUM VALUE....................
    let small=[1,2,3,4,5];
    let iv1=Infinity;
    const min=small.reduce((cv,ac)=>{
        return Math.min(ac,cv);
    },iv1)
    console.log(min);


    