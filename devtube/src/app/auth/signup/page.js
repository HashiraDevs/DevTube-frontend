"use client"
import { useGetUsersQuery, useAddUsersMutation } from '@/app/GlobalRedux/signup/slices/apiSlice'

import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/navigation'
import Validation from './Validation'
// import GoogleSignIn from '@/components/googleButton/googleSignIn';
import Link from "next/link"
import { HiEye } from "react-icons/hi";
import { HiEyeOff} from "react-icons/hi";

const SignupPage = () => {

  const [value, setValue] = useState({
      firstname :"",
      lastname :"",
      email :"",
      password :"",
      confirmpassword :"",
  })

  const[isloading, setIsloading]=useState(false)

  const [errors, setErrors] = useState({})

  const [isFormValid, setIsFormValid] = useState(false); 

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  };
  
  // const router = useRouter(); 
  // redirection to homepage after successfull SIGNUP
//   useEffect(() => {
//    if (isFormValid) {
//      router.push('/');
//    }
//  }, [isFormValid, router]);

const handleOnClick = (e) =>{
  e.preventDefault();
  const errors = Validation(value);
  setErrors(errors);
  const isValid = Object.keys(errors).length === 0;
  setIsFormValid(isValid);

  if (isValid) {
    addUsers(value)
  }
};

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (e) => {
      setShowPassword(!showPassword)
    }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleShowConfirmPassword = (e) => {
      setShowConfirmPassword(!showConfirmPassword)
    }


  return (
      <div className='flex flex-col justify-center items-center '>
        <h2 className="mb-8 font-bold text-2xl mt-32">SIGNUP</h2>
        <form onSubmit={handleOnClick}>
          <div className='input'>
            <label className=' input label'>First Name</label>
            <input className='input input' 
              value={value.firstname}
              type='text' 
              onChange={handleOnChange}
              name='firstname'
            />
            {errors.firstname && <p className='text-red-600 text-left'>{errors.firstname}</p>}
          </div>
          <div className='input'>
            <label className='input label'>Last Name</label>
            <input className='input input' 
              value={value.lastname}
              type='text' 
              onChange={handleOnChange}
              name='lastname'
            />
            {errors.lastname && <p className='text-red-600 text-left'>{errors.lastname}</p>}
          </div>
          <div className='input'>
            <label className='input label'>Email</label>
            <input className='input input' 
              value={value.email}
              type='email' 
              onChange={handleOnChange}
              name='email'
            />
            {errors.email && <p className='text-red-600 text-left'>{errors.email}</p>}
          </div>
          <div className='input relative'>
            <label className='input label'>Password</label>
            <div className='relative flex items-center'>
              <input className='input input' 
                value={value.password}
                type={showPassword?'text' : 'password'} 
                onChange={handleOnChange}
                name='password'
                />
                <span className='text-1xl absolute top-3 right-5'>
                  {
                    (showPassword === false)? <HiEyeOff onClick={handleShowPassword} /> : <HiEye onClick={handleShowPassword}/>
                  }
                </span>
            </div>
            {errors.password && <p className='text-red-600 text-left'>{errors.password}</p>}
          </div>
          <div className='input'>
            <label className='input label'>Confirm Password</label>
            <div className='relative flex items-center'>
              <input className='input input' 
                value={value.confirmpassword}
                type={showConfirmPassword?'text' : 'password'} 
                onChange={handleOnChange} 
                name='confirmpassword'
              />
              <span className='text-1xl absolute top-3 right-5'>
                  {
                    (showConfirmPassword === false)? <HiEyeOff onClick={handleShowConfirmPassword} /> : <HiEye onClick={handleShowConfirmPassword}/>
                  }
                </span>
            </div>
            {errors.confirmpassword && <p className='text-red-600 text-left'>{errors.confirmpassword}</p>}
          </div>
          <button disabled={isloading || Object.keys(errors).length > 0} className="primary-btn-large">
            {isloading ?<span>{contet}</span>:<span>SIGN UP</span>}
          </button>
        </form>
        <div className='flex flex-col justify-center'>
            <p className="mb-3">or</p>
          {/* adding the sign in with google button
                    <GoogleSignIn/> */}
          <p>Already have an account? <Link className="text-[color:var(--secondary-text)]" href={'./login'}>Log In</Link></p>
        </div>
        about:blank      </div>
 )

}

export default SignupPage
