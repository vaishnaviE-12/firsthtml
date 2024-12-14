class BankAccount{
  #acno;
  #balance; 
  constructor(acno,balance){
    this.#acno=acno;
    this.#balance=balance;
  } 
  setAcno(acno){
   this.#acno;
   }
   getAcno(){
    return this.#acno;
   }
   setBalance(balance){
    this.#balance;
    }
   getBalance(){
    return this.#balance;
    }
  withdraw(amount){
    if(this.#balance>500){
        this.#balance=this.#balance-amount;
  console.log(this.#balance);
}
}
deposite(amount){
    if(amount>0){
        this.#balance=this.#balance+amount;
        console.log(this.#balance)
    }
}
}
const b=new BankAccount(108783786,1000);
console.log(b.getAcno());
console.log(b.getBalance());
b.withdraw(500);
b.deposite(1000);