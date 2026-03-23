import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const [loading,setLoading]=useState("")
const [error,setError]=useState("")

// hook fro navigation
const navigate=useNavigate()

// function to handel sign in
const submit=async(e)=>{
  console.log("sign in function")
  e.preventDefault()
  setLoading("PLease wait as we regester you...")

  try {
    // craete a form data object to hold our key value pair
    const data=new FormData()
    // use append method to attach the key-value pairs
    data.append("email",email)
    data.append("password",password)
    // send the data object to flask api via end point.
    // send axois-libary that allows us o send http request
    // await-used in an asynchronus function  that enables to wait fro response before procceding with execution
    
    const response =await axios.post("https://mumo.alwaysdata.net/api/singin",data)
    console.log(response)
    setLoading("")
    
    // making desion based on flask api
    if(response.data.user){
      // REDIRECTto a dd product
      localStorage.setItem("user",JSON.stringify(response.data.user))
      // storing the logged in user in local storage
      navigate("/")

    }else{
      setError(response.data.Message)
    }
  } catch (error) {
    setLoading("")
    setError(error.message)
    
  }

}
  return (
    <div className='row mt-3 justify-content-center'>
      <div className='card shadow p-5 col-md-6 text-center form '>
     <h2 className='text-center text-muted'>Sign in</h2>
     <h5 className='text-info'>{loading}</h5>
     <h5 className='text-danger'>{error}</h5>
        <form onSubmit={submit}>
          <input type="text" placeholder='Enter email' className='form-control' value={email}
          onChange={(e)=>setEmail(e.target.value)}/> <br />
          <input type="password" placeholder='Enter Password' className='form-control' value={password}
          onChange={(e)=>setPassword(e.target.value)}/> <br />
          <button type='submit' className='btn btn-color'>Sign In</button>
          <p className='text-secondary'>Dont have an account ?<Link to={"/signup"}>SignUp</Link></p> 

        </form>

      </div>



    </div>
  )
}

export default Signin