let arr=[10,20,30,40,50,60];
for(var i=0;i<=arr.length-1;i++){   // for loop
    console.log(arr[i]);
}
// for of
for(let x of arr){
    console.log(x);
}
// for in
for(let y in arr){
    console.log(y);
    console.log(arr[y]);
}
console.log(arr.includes(20));
console.log(arr.includes(2));