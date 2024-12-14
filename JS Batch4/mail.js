function emailvaildation(){
    var email=document.getElementById("em").value;
    if(email!==" "){
        if(email.length>6 && email.includes("@gmail.com"));{
        document.write("thankyou for registration");
    }
        else{
        document.write("enter a vaild email");
    }
}
else{
    document.write("email box cannot be empty");
}
}