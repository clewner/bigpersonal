function validateContact(){
    const contactname = document.getElementById("contactname");
    const contactemail = document.getElementById("contactemail");
    const contactmessage = document.getElementById("contactmessage");
  
    if(contactname.checkValidity() && contactemail.checkValidity() && contactmessage.checkValidity() ){
      document.getElementById("contactform").submit();
    }else{
      if(!contactname.checkValidity()){
        document.getElementById("nameerror").style.display = "block";
        contactname.classList.add("inputerror");
      }else{
        document.getElementById("nameerror").style.display = "none";
        if(contactname.classList.contains("inputerror")){
          contactname.classList.remove("inputerror");
        }
      }
  
      if(!contactemail.checkValidity()){
        document.getElementById("emailerror").style.display = "block";
        contactemail.classList.add("inputerror");
      }else{
        document.getElementById("emailerror").style.display = "none";
        if(contactemail.classList.contains("inputerror")){
          contactemail.classList.remove("inputerror");
        }
      }
  
      if(!contactmessage.checkValidity()){
        document.getElementById("messageerror").style.display = "block";
        contactmessage.classList.add("inputerror");
      }else{
        document.getElementById("messageerror").style.display = "none";
        if(contactmessage.classList.contains("inputerror")){
          contactmessage.classList.remove("inputerror");
        }
      }
    }
  
    
  
  }