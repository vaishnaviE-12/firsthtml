const person={
    fname:"Ameerpet",
    lname:"Technologies",
    fullName:function(){
        console.log(this.fname +" "+person.lname)
    }


// anonymous function
,greet:function(){
    return "hi.......";
}
}
person.fullName();
console.log(person.greet());                                                                                                                                                                                                                                                                                                                                 