let arr1=[1,2,3,4]; //COMBINATING ALL ARRAYS
let arr2=[5,6,7,8];
let arr3=[9,10,11,12];
let combinedArr=[...arr1,...arr2,...arr3];
console.log(combinedArr);

//ADDING ELEMENT AT THE END
let arr=[10,20,30,40];
let newArr=[...arr,50,60];
console.log(newArr);

//ADDING ELEMENTS IN THE FIRST
let Arr=[3,4,5,6];
let newArr1=[1,2,...Arr];
console.log(newArr1);

//COPING ONE ARRAY TO ANOTHER
let fruits=["banana","apple","orange"];
let newarr=[...fruits];
console.log(newarr);

// COMBINING TWO OBJECTS
let obj1={
    name:"vaishu",
    age:23
}
let obj2={
    job:"Developer",
    salary:20000
}
let obj3={...obj1,...obj2};
//let obj3={...obj1,...obj2,adress:"DSNR"};
console.log(obj3);

//COPING THE ELEMENTS TO ANOTHER ELEMENTS
let obj={
    name:"abc",
    age:23
}
let obj4={...obj};
console.log(obj4);