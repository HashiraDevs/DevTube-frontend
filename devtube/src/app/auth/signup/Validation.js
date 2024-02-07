import React from 'react'


const Validation = (value) => {
    let errors={}

    if (!value.firstname) {
        errors.firstname = "First Name Is Required!";
      } else {
        const passDigit = /^([^0-9\s]*)$/;
        if (!passDigit.test(value.firstname)) {
          errors.firstname = "First name should not contain numbers or spaces";
        }
      }
    
      if (!value.lastname) {
        errors.lastname = "Last Name Is Required!";
      } else {
        const passDigit = /^([^0-9\s]*)$/;
        if (!passDigit.test(value.lastname)) {
          errors.lastname = "Last name should not contain numbers or spaces";
        }
      }

    if (!value.email) {
        errors.email="Email Is Required !" 
     } else if (!/\S+@\S+\.\S+/.test(value.email)) { 
        errors.email = 'Email is invalid !' 
     } 

    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const whitespace = /\s/;
    if (!value.password) { 
        errors.password = 'Password is Required !'; 
    }else if(!value.password.match(lowerCase)){
        errors.password = 'Password should contain atleast one lowercase !'
    }
    else if(!value.password.match(upperCase)){
        errors.password = 'Password should contain atleast one uppercase !'
    } 
    else if(!value.password.match(numbers)){
        errors.password = 'Password should contain atleast one digit !'
    }  
    else if(!value.password.match(specialCharacters)){
        errors.password = 'Password should contain atleast one special character'
    } 
    else if (value.password.length < 8) { 
        errors.password = 'Password must be at least 8 characters !'; 
    }else if (whitespace.test(value.password)){
        errors.password= 'Password should not contain spaces !'
    }

    if (value.password !== value.confirmpassword) {
        errors.confirmpassword = "Passwords Don't Match !"
    }
    return errors
}
export default Validation
