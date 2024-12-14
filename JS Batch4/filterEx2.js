let person=[
    {name:"vaishu",age:23,job:"full stack developer" },
    {name:"abc",ag:22,job:"software developer" },
    {name:"xyz",age:20,job:"frontend developer "},
    {name:"mno",age:28,job:"Backtend developer "},
    {name:"pqr",age:25,job:"java developer "},
];
for(var i=0;i<=person.length-1;i++){
    if(person[i].age>=25){
        console.log(person[i].name);
    }
}
 for(var x of person){
    if(x.age>=25){
     console.log(x.name);
    } 
 }
 for(var y in person){
    if(y.age>25){
        //console.log(y.name);
        console.log(person[y].name);
    }
 }
 const newvalues=person.filter((cv)=>{
    if(cv.age>25){
        return cv.name;
    }
 })
 console.log(newvalues);

