let arr=[10,20,30,40];// push method
console.log(arr);
arr.push(50);
console.log(arr);

////pop()method
console.log(arr);
arr.pop(50);
console.log(arr);

// pop() returns last element
lastelement=arr.pop(40);
console.log(lastelement);

let days=['monday','tuesday','wednesday','thursday','friday'];// shift()method
days.shift();
console.log(days);
/* let firstelement=days.shift();
 console.log(firstelement);*/
 
 days.unshift("sunday"); // unshift() method
 console.log(days);

 let numbers=[10,20,36,40,50,20,45,20];// indexOf() method
 let index=numbers.indexOf(20);
 console.log(index);

 let index1=numbers.lastIndexOf(20);//lastindexOf() method
 console.log(index1);

let numbers1=[1,2,3,4,5];// reverse() method
 numbers1.reverse(); 
 console.log(numbers1);

 // sorting()
 let fruits=["banana","apple","cherry"];
 fruits.sort();
 console.log(fruits);

 // number are not sorting
 let number=[2,5,4,3,1,8,6,9,20];
 number.sort();
 console.log(number);

 //Array.isArray() method
 let fruit=["banana","apple","cherry"];
 let name="abc";
 console.log(Array.isArray(fruits));
 console.log(Array.isArray(name));
 
// concat() method
let num1=[1,2,3,4];
let num2=[5,6,7,8];
let num3=[9,10,11.12];
let combinedArr=num1.concat(num2,num3);
console.log( combinedArr);

// join() method
let fruits1=["apple","banana","cherry","orange"];
let joinedArr=fruits1.join(" *");
console.log(joinedArr);
