"use client"
import React, { useState } from 'react'
import Validation from './Validation'
// import GoogleSignIn from '@/components/googleButton/googleSignIn';
import Link from "next/link"



const SignupPage = () => {

  const [value, setValue] = useState({
      firstname :"",
      lastname :"",
      email :"",
      password :"",
      confirmpassword :"",
  }) 

  const [errors, setErrors] = useState({})

  const [isFormValid, setIsFormValid] = useState(false); 

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    console.log(e.target.value);
  };

    const handleOnClick = (e) =>{
      e.preventDefault();
      setErrors(Validation(value));
      setIsFormValid(Object.keys(errors).length === 0); 
      if (isFormValid) { 
        console.log('Form submitted successfully!'); 
    } else { 
        console.log('Form has errors. Please correct them.'); 
    } 
    };

  return (
    <div className='flex flex-col justify-center items-center h-svh'>
      <h2 className="mb-8 font-bold text-2xl">SIGNUP</h2>
      <form>
        <div className='flex flex-col'>
          <label className=' text-left'>First Name</label>
          <input className='input border-2 border-black rounded-xl mb-3' 
            value={value.firstname}
            type='text' 
            onChange={handleOnChange}
            name='firstname'
          />
          {errors.firstname && <p className='text-red-600 text-left'>{errors.firstname}!</p>}
        </div>
        <div className='flex flex-col'>
          <label className='input text-left'>Last Name</label>
          <input className='input border-2 border-black rounded-xl mb-3' 
            value={value.lastname}
            type='text' 
            onChange={handleOnChange}
            name='lastname'
          />
          {errors.lastname && <p className='text-red-600 text-left'>{errors.lastname}!</p>}
        </div>
        <div className='flex flex-col'>
          <label className='input text-left'>Email</label>
          <input className='input border-2 border-black rounded-xl mb-3' 
            value={value.email}
            type='text' 
            onChange={handleOnChange}
            name='email'
          />
          {errors.email && <p className='text-red-600 text-left'>{errors.email}!</p>}
        </div>
        <div className='flex flex-col'>
          <label className='input text-left'>Password</label>
          <input className='input border-2 border-black rounded-xl mb-3' 
            value={value.password}
            type='password' 
            onChange={handleOnChange}
            name='password'
          />
          {errors.password && <p className='text-red-600 text-left'>{errors.password}!</p>}
        </div>
        <div className='flex flex-col'>
          <label className='input text-left'>Confirm Password</label>
          <input className='input border-2 border-black rounded-xl mb-3' 
            value={value.confirmpassword}
            type='password' 
            onChange={handleOnChange} 
            name='confirmpassword'
          />
          {errors.confirmpassword && <p className='text-red-600 text-left'>{errors.confirmpassword}!</p>}
        </div>
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-xl h-8 w-64 mb-3"
        onClick={handleOnClick}>  
          SIGNUP
        </button>
        <p className="mb-3">or</p>
        {/* <GoogleSignIn/> */}
      </form>
      <p>Already have an account? <Link className="text-[color:var(--secondary-text)]" href={'../login'}>Log In</Link></p>
    </div>
  )
}

export default SignupPage

