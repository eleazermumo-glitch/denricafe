import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const MakePayment = () => {
    // destructute/extract the state product that has been sent/passed to this component
    const { product } = useLocation().state || {}
    // console.log(product)
    const [phone,setPhone]=useState("")
    const[message,setMessage]=useState("")
    const[error,setError]=useState("")
    const submit=async (e)=>{
        e.preventDefault()
        setError("")
        setMessage("Please wait as we process your message..")
        try {
            const data=new FormData()
            data.append("phone",phone)
            data.append("amount",product.product_cost)

            const response=await axios.post("https://mumo.alwaysdata.net/api/mpesa_payment",data)
            console.log(response)
            setMessage(response.data.Message)
            
        } catch (error) {
            setMessage("")
            setError(error.message)
            
        }
    }

    const img_url = "https://mumo.alwaysdata.net/static/images/"
    return (
        <div className='row justify-content-center mt-5 form'>
            <h1 className='text-success text-center'>Lipa na mpesa</h1>
            <h5 className='text-success text-center'>{message}</h5>
            <h5 className='text-danger text-center'>{error}</h5>
            <div className='col-md-6 text-center'>
                <div className='card shadow p-3'>
                    <img src={img_url + product.product_photo} alt="" className='product_img' />
                    <div className='card-body'>
                        <h5>Product name:{product.product_name}</h5>
                        <p className='text-muted'>Description:{product.product_description}</p>
                        <p className='text-warning'>cost:ksh {product.product_cost}</p>
                        <form onSubmit={submit}>
                            <p>Phone to make MakePayment</p>
                            <input type="tel" placeholder='254...' className='form-control' value={phone} required onChange={(e)=>setPhone(e.target.value)}/> <br />
                            <button type='submit' className='btn-color'>Pay Now</button>
                        </form>

                    </div>

                </div>
 
            </div>

        </div>
    )
}

export default MakePayment