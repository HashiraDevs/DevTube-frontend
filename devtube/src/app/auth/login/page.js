'use client'
import Link from "next/link"
import {useRouter} from 'next/navigation'
import { useState,useEffect } from "react"
import { HiEye } from "react-icons/hi";
import { HiEyeOff} from "react-icons/hi";



const LoginPage = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const[isloading, setIsloading]=useState(false)
  
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    console.log('render');
  }, []);

  function sendData(data){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response =>{
      if(!response.ok){
        throw new Error('Login Failed')
      } else{
       return response.json()
      }
    })
    .then(()=>{
      return router.push('/')
    })
    .catch( err =>{
      console.log(err)
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsloading(true)
    const loginDetails={email,password}
    sendData(loginDetails)


  }

  return (
    <div className="mt-10">
      <p className="text-center font-inter text-black text-2xl font-semibold">LOGIN</p>

      <form onSubmit={handleSubmit} className="inline-flex flex-col items-start gap-4 ">
        <div className="input">
          <label className="input">Email</label>
          <input
          className=" input"
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="input relative">
          <label>Password</label>
          <input
          type={showPassword?'text' : 'password'}
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <span className='text-1xl absolute top-11 right-5'>
                {
                  (showPassword === false)? <HiEyeOff onClick={handleShowPassword} /> : <HiEye onClick={handleShowPassword}/>
                }
              </span>
        </div>

        <button disabled={isloading} className="primary-btn-large">
          {isloading ?<span>LOADING...</span>:<span>LOGIN</span>}
        </button>
        <p>Don't have an account?<Link className="text-[color:var(--secondary-text)]" href={'./signup'}>sign up</Link></p>
        <Link href={'#'} className="text-[color:var(--secondary-text)]">Forgot password?</Link>
      </form>

    </div>
  )
}

export default LoginPage