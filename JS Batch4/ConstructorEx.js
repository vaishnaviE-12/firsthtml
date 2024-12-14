class person{
    constructor(){
        console.log("I am constructor");
    }
}
const p=new person();
const c=new person();
//..................................................................
class RailwayForm{
    constructor(name,ticketno){
        this.fname=name;
        this.ticketno=ticketno;
        console.log("mr/ms",this.fname+"you booked your ticket with no"+this.ticketno);
    }
    submit(){
        console.log("mr/ms",this.fname+"your ticket booked successfully with ticketno"+this.ticketno);
    }
    cancel(){
        console.log("mr/ms",this.fname+"your ticket cancelled"+this.ticketno);
    }
    }
    const r=new RailwayForm("vaishu",3826);
    r.submit();
    r.cancel();
    
