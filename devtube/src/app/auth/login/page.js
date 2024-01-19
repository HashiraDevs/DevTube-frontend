'use client'
import Link from "next/link"

import { useState } from "react"
const LoginPage = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const[isloading, setIsloading]=useState(false)

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsloading(true)
    const loginDetails={email,password}


  }

  return (
    <div className="mt-10 pt-10">
      <h1 className="m-3 font-600 text-3xl leading-normal">LOGIN</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left items-center mb-4">
        <span className="text-left">
          <label className="block">Email</label>
          <input
          className="border border-solid border-black rounded-full p-1 "
          type="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </span>

        <span className="">
          <label className="block">Password</label>
          <input
          type="password"
          className="border border-solid border-black rounded-full p-1"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </span>

        <button disabled={isloading} className="primary-btn-large">
          {isloading ?<span>LOADING...</span>:<span>LOGIN</span>}
        </button>

      </form>
      <p>Don't have an account?<span className="text-blue-500"><Link href={'./signup'}>sign up</Link></span></p>
      <Link href={'#'} className="text-blue-500">Forgot password?</Link>
    </div>
  )
}

export default LoginPage