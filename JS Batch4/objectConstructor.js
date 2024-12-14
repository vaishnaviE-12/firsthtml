//Dot Notation
//create a car object
const car=new Object();
//Add elements
car.make='Toyota';
car.model='Camny';
car.year=2022;
car.color='Blue';
// Access and print elements
console.log("make:"+car.make);
console.log("model:"+car.model);
console.log("year:"+car.year);
console.log("color:"+car.colors);
// modify elements
car.year=2023;
car.color='Red';
// Access and print modified elements
console.log("Modified Year:"+car.year);
console.log("Modified color:"+car.color);
//delete elements
