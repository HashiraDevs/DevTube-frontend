import React from 'react'


const Validation = (value) => {
    let errors={}

    if(!value.firstname){
        errors.firstname="! First Name Is Required"
    }
    if(!value.lastname){
        errors.lastname="! Last Name Is Required"
    }
    if (!value.email) {
        errors.email="! Email Is Required" 
    } else if (!/\S+@\S+\.\S+/.test(value.email)) { 
        errors.email = '! Email is invalid.' 
    } 
    
    if (!value.password) { 
        errors.password = '! Password is Required'; 
    } else if (value.password.length < 6) { 
        errors.password = '! Password must be at least 6 characters.'; 
    }

    if (value.password !== value.confirmpassword) {
        errors.confirmpassword = "! Passwords Don't Match"
    }
    return errors
}
export default Validation
