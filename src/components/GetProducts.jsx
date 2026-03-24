import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const GetProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  // path to where images are
  const img_url = "https://mumo.alwaysdata.net/static/images/"

  const getProducts = async () => {
    setError("")
    setLoading("Wait as we load products....")
    try {
      const response = await axios.get("https://mumo.alwaysdata.net/api/get_product_details")
      console.log(response)
      setLoading("")
      setProducts(response.data)
    } catch (error) {
      setLoading("")
      setError(error.Message)

    }
  }
  useEffect(() => {

    getProducts()
  }, [])


  return (
    <div className='row mt-4 container-fliud nav '>
      <div className='container-fluid'>
        <section className="row mb-4 mt-3 justify-content-center">
          <div className="col-md-12">
            <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">

              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src="/images/cafe desing 2.png" className="d-block w-100 carousel-img" alt="slide1" />
                </div>

                <div className="carousel-item">
                  <img src="/images/cafe1.png" className="d-block w-100 carousel-img" alt="slide2" />
                </div>

                <div className="carousel-item">
                  <img src="/images/eli.png" className="d-block w-100 carousel-img" alt="slide3" />
                </div>
                <div className="carousel-item">
                  <img src="/images/ema.png" className="d-block w-100 carousel-img" alt="slide3" />
                </div>
                

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>
        </section>




      </div>
      <h2 className='mt-3 text-center text-muted'>Available products</h2>
      <h6 className=''>{loading}</h6>
      <h6 className='text-danger'>{error}</h6>
      {/* map products and display them */}
      {products.map((product) => (
        <div key={product.id} className='justify-content-center col-md-3'>

          <div className='card shadow p-4 text-center mb-4 card-margin '>
            <div className="card-body">
              <div className='img-overlay'>

                <img src={img_url + product.product_photo} alt="" className='product_img mt-2' />
              </div>
              <h5 className='mt-2'>{product.product_name}</h5>
              <p className='text-muted'>{product.product_description}</p>
              <p className='text-warning'> ksh{product.product_cost}</p>
              <button className='btn-color' onClick={() => navigate("/makepayment", { state: { product } })}>Buy Now

              </button>
            </div>
          </div>










        </div>
      ))

      }




      <div className="row App-header text-light text-center p-2">
        <h4 className="fs-6 text-light">Developed by Eleazer Mumo.&copy; 2026. All Rights Reserved</h4>

      </div>
    </div>

  )
}

export default GetProducts