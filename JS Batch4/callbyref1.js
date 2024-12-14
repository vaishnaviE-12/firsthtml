function callbyref(arr){
    arr.push(60);
    arr.pop();
    arr.unshift(70,80);
    console.log("array value inside the function",arr);
}
let arr1=[10,20,30,40];
callbyref(arr1);
console.log("array outside the function",arr1);

//
function test(Student){
    Student.name="vaishu";
    console.log("name",Student);
}


