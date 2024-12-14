class person{
    constructor(name,graduation,village){
        this.name=name;
        this.graduation=graduation;
        this.village=village;
        console.log(this.name+"is my name");
    }
    greet(){
        console.log(this.name,"is prsuing"+this.graduation);
    }
    mydetails(){
        console.log("I am"+this.name+",prsuing"+this.graduation+",village name "+this.village);
    }
}
const d=new person("vaishu","MCA","Kondurg");
d.greet();
d.mydetails();