//LOCAL SCOPE
/*  function scopeEx(){
      let msg="Good Morning";
      console.log(msg);
  }
  scopeEx();*/
//console.log(msg);
/////..........................
//GLOBAL SCOPE
/* let Message="Good Afternoon";
 function scopeEx(){
     console.log(Message);
 }
 scopeEx();
 console.log(Message);*/
///................................
//BLOCK SCOPE
/*if(true){
    let name="vaishu";
    console.log(name);
}
//console.log(name);*/
//////..............................
//BLOCK EX2
/*if(1){
    var name1="vaishu";
    console.log(name1);
}
console.log(name1);*/
///.............................
//LEXICAL SCOPE
/*let name="vaishu";
function  scopeEx(){
   let age=23; 
console.log("I'M GLOBAL SCOPE" +age);
function Ex(){
  if(1){
    let msg="hello";
    console.log("I'M LOCAL SCOPE"+ msg);
  }
 }
 Ex();
}
console.log("BLOCK SCOPE"+name);
scopeEx();*/
////...........................................
/*const gv="global variable global scope";
function outerfun(){
    let lv="Local variable Local scope"; 
    function innerfun(){
        console.log()
    } 
}*/
///..........................................
/*let person={
    fname:"Ameerpet",
    lname:"technologies",
    fullname1:function(){
        console.log(this.fname+" "+this.lname);
    },
    fullname2:()=>{
        console.log(this.fname+" "+this.lname);
    }
}
person.fullname1();
person.fullname2();*/
///......................................




