import React from 'react'

const Carousel = () => {
  return (
        <section className="row mb-4 mt-3 justify-content-center">
      <div className="col-md-12">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="/images/" className="d-block w-100 carousel-img" alt="slide1" />
            </div>

            <div className="carousel-item">
              <img src="/images/" className="d-block w-100 carousel-img" alt="slide2" />
            </div>

            <div className="carousel-item">
              <img src="/images/" className="d-block w-100 carousel-img" alt="slide3" />
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
    

    

  )
}

export default Carousel