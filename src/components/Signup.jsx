import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // hooks using Usestate that will be updated later in the program
  const [username,setUsername]=useState("")
   const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
     const [password,setPassword]=useState("")
     
     
     // hook to update error status
     const [success,setSuccess]=useState("")
     const [error,setError]=useState("") 
    const [loading,setLoading]=useState("")

     const submit=async (e)=>{
      // e.preventDefault function prevents the normal default behaviour of default which is reloadng the  form when data is submited,preventing hooks from being rested hence page not reloading
      e.preventDefault()
      setSuccess("")
      setError("")
      setLoading("Wait as you are registered...")
      try {
        // prepare our data- Form data
        // create Form Dataobject which will allow key value pairs.

        const data=new FormData()
        // append key value pairs to data object
        data.append("username",username)
        data.append("email",email)
        data.append("phone",phone)
        data.append("password",password)

        // axios is a library that help in sending/making diffrent types of http request to our api ie post/get/put/delete/patch

        const response=await axios.post("https://mumo.alwaysdata.net/api/singup",data)
        setLoading("")
        console.log("response",response)
        setSuccess(response.data.message)

        // clear our hooks start after clear successful submision
        setUsername("")
        setEmail("")
        setPhone("")
        setPassword("")
        
      } catch (error) {
        setLoading("")
        setSuccess("")
        setError(error.message)
        
      }

     }
  return (
    <div className='row mt-4 justify-content-center  '>
      <div className="card shadow col-md-6 p-3 text-center form">
        <h2 className='text-muted'>SignUp</h2>
        <h5 className='text-danger'>{error}</h5>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='text-success'>{success}</h5>
        <div>
          <form onSubmit={submit} >
            <fieldset>
              <input type="text" placeholder='Enter Username'  className='form-control '  required value={username}  onChange={(e)=>setUsername(e.target.value)}/> <br />
              <input type="email"  placeholder='Enter Email'  className='form-control ' required value={email}
              onChange={(e)=>setEmail(e.target.value)}/> <br />
              <input type="tel" placeholder='Enter Phone'  className='form-control 'required value={phone}
              onChange={(e)=>setPhone(e.target.value)}/> <br /> 
              <input type="password" placeholder='Enter Password' className='form-control ' required value={password} onChange={(e)=>setPassword(e.target.value)}/> <br /> 
              <button type='submit' className=' btn btn-color'>Sign Up</button>

          
            </fieldset>
          </form>
              <p className='text-secondary'>Already have An Account ?<Link to={"/signin"}>Signin</Link></p> 
        </div>


      </div>
        
    </div>
  )
}

export default Signup