//Step1: Defining a function handleSubmit with an argument event 
let handleSubmit = () => {
 // Accessing and Storing dom elements to be used in validation rules
let fName = document.getElementById('firstname');
let sName = document.getElementById('Secondname');
let phoneContact = document.getElementById('Phone_Contact');
let emailAddress = document.getElementById('Email');
let userid = document.getElementById('NIN_ID');
let userSecurity = document.getElementById('Security');
let loanAmount = document.getElementById('Desired_Amount');
let userReferee = document.getElementById('Guarantor');

// step2: Prevent default behaviours of the form
event.preventDefault()
 //Step3: Checking whether validation functions evaluates true or false
if(name1(fName)){
  if(name2(sName)){
    if(digits(phoneContact)){
      if(contacts(emailAddress)){
        if(alphanumeric(userid)){
          if(assest(userSecurity)){
            if(loan(loanAmount)){
              if(userRef(userReferee)){

              }
            }
          }
        }
      }
    }
  }
}
 //All the validation methods return false
return false;
};
//Step4: 
/**Defining the validation methods which ensure that
 *  the user field's are not empty and they're between
 * the ranges specified by the different parameters identified
 * Of which some have variables that are declared*/

function name1(alphabet){
  var letters = /^[A-Za-z]+$/;
  if(alphabet.value.match(letters)){
   
    //return prevents execution its a mis-match
    return true;
  }
  else{
    alert("please specify your first name before submitting");
    return false;
  }
}

function name2(alphabet){
  var letters = /^[A-Za-z]+$/;
  if(alphabet.value.match(letters)){
    
    return true;
  }
  else{
    alert("please specify your second name before submitting");
    return false;
  }
}

function digits(telephone){
  var numbers = /^[0-9]{10}$/;
  if(telephone.value.match(numbers)){
   
    return true;
  }
  else{
    alert("please specify your contact details before submitting");
    return false;
  }
}

function contacts(addressing){
var mailformart = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(addressing.value.match(mailformart)){
  
  return true;
 }
 else{
  alert("please fill in the correct email address");
  return false;
 }
}

function alphanumeric(nationalid){
  var ids = /^[0-9A-Z]+$/;
if(nationalid.value.match(ids)){
 
  return true;
 }
 else{
  alert("please specify your NationalId NIN number");
  return false;
 }
}

function assest(valuable){
  var userSec = /^[A-Za-z]+$/;
 if(valuable.value.match(userSec)){
 
   return true;
 }
 else{
  alert("please specify your ideal collateral security");
  return false;
 }
}

function loan(money){
  var figure = /^[0-9]+$/
 if(money.value.match(figure)){
  
  return true;
 }
 else{
  alert("please specify the amount you want to be loaned");
  return false;
 }
}

function userRef(person){
  var ref = /^[A-Za-z]+$/;
 if(person.value.match(ref)){
    //Step4: Actually handleSubmit after all the validation rules have been performed
  alert('Application loan has been submitted successfully');

  //Event that is going to reload the current page.
  window.location.reload()
  return true;
 }
 else{
  alert("please specify your Guarantor's full name");
 

return false;
 }
}
