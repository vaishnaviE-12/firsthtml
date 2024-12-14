class Person{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }
    setName(name){
        this.#name=name;
    }
        getName(){
            return this.#name;
        }
    setAge(age){
        this.#age=age;
    }
    getAge(){
        return this.#age;
    }
}
const p=new Person("vaishu",23);
console.log(p.getName());
console.log(p.getAge());
//p.setName("zero");
//p.setAge(26);
//console.log(p.getName());
//console.log(p.getAge());
