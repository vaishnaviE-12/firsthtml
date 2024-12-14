let s=new Set()
for(var i=1;i<=10;i++){
    s.add(i);
}
console.log(s);
 //CONVERTING INTO ARRAY
let arr=[...s]
console.log(arr);
arr.push(5);