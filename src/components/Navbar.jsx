import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='navbar navbar-expand-md navbar-light nav'>
          <Link to={'/'} className="navbar-brand"><img src={"/images/cafe.png"} alt="" className="img-fluid" style={{ maxHeight: "50px" }} /></Link>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse"
          data-bs-target="#navbarcollapse">
            <span className='navbar-toggler-icon'></span>


          </button>
          {/* {collapsible content} */}
          <div className='collapse navbar-collapse' id="navbarcollapse">
            <div className='navbar-nav'>
              <Link to={"/"} className="nav-link active">Home</Link>
              <Link to={"/addproduct"} className="nav-link">Addproduct</Link>
              <Link to={"/signin"} className="nav-link">Signin</Link>
              <Link to={"/signup"} className="nav-link">Signup</Link>
              <Link to={"/about"} className='nav-link'>About us</Link>

            </div>
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar