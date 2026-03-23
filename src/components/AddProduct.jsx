import axios from 'axios'
import React, {useState } from 'react'


const AddProduct = () => {
  const [product_name,setProductName]=useState("")
  const [product_description,setProductDescription]=useState("")
  const [product_cost,setProductCost]=useState("")
  const [product_photo,setProductPhoto]=useState("")
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")
  const [success,setSuccess]=useState("")


  const submit=async (e) => {
    e.preventDefault()
    setSuccess("")
    setError("")
    setLoading("please wait as we process..")

    try {
      const data=new FormData()
      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const response=await axios.post("https://mumo.alwaysdata.net/api/add_product",data)
  
      setSuccess(response.data.Message)
      setLoading("")
      console.log(response)
      
      
    } catch (error) {
      setLoading("")
      setSuccess("")

      setError(error.Message)
      console.log(error)
      
    }

    
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className='card shadow col-md-6 text-center p-3 form'>
        <h1 className='text-center text-muted'>Add product</h1>
            <h6 className='text-info'>{loading}</h6>
            <h6 className='text-danger'>{error}</h6>
            <h6 className='text-success'>{success}</h6>
                
        
        <form onSubmit={submit}>
          {product_name}
          <input type="text" placeholder='Enter product name' className='form-control'value={product_name} required onChange={(e)=>setProductName(e.target.value)}  /> <br />
          {product_description}
          <input type="text" placeholder='Describe your product..' className='form-control' value={product_description} required onChange={(e)=>setProductDescription(e.target.value)}/> <br />
          {product_cost}
          <input type="number" placeholder='Product Cost...' className='form-control'value={product_cost} required onChange={(e)=>setProductCost(e.target.value)} /><br />
          <p className='text-center form'><b>Browse/Upload Product Photo</b></p>
          
          <input type="file" name="" id=""  className='form-control' required accept='image/*' onChange={(e)=>setProductPhoto(e.target.files[0])} /><br />
          <button type='subimit'className='btn-color text-center'>Upload folder</button>
        </form>

        

      </div>
      
      
    </div>
  )
}

export default AddProduct