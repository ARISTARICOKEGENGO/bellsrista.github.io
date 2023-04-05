/*form validation*/
function validation(){
    var name = document.messageform.fullname.value;
    var email = document.messageform.email.value;
    var messagedetails = document.messageform.message.value;

    if(name == ''){
        alert("Fullname cannot be empty");
    }
    else if(email == ''){
        alert("Email cannot be empty");
    }
    else if( messagedetails == ''){
        alert("message cannot be empty");
    }
    else{
        alert("Submitted successfully");
    }
}



