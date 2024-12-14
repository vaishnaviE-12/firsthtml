const student={
    name:"ABC",
    course:"MCA",
    id:101,
    student:()=>{
      console.log("first students details");
    }
}
const student1={
    name:"MNO",
    course:"MBA",
    id:201,
    student:()=>{
        console.log("second students details");
    }
}
const prototype2={
    run:function(){
        console.log("I am run method prototype2");
    }
}
student.__proto__=student1;
student1.__proto__=prototype2;
student.run();


