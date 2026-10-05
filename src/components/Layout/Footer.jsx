import React from 'react'
import fb from '../../assets/images/Home/fb.png';
import vector from '../../assets/images/Home/Vector.png';
import twitter from '../../assets/images/Home/twitter.png';
import mail from '../../assets/images/Home/mail.png';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-ft1 py-5 px-5 justify-content-around">
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="row ">
            {/* column1 */}
            <div className="col-6 col-md-3 ">
              <small className="text-white ">Product</small>
              <div className="d-flex flex-column mt-3 gap-1">
                <Link className="ft-link " to="/">Home</Link>
                <Link className="ft-link" to="/customers">Customers</Link>
                <Link className="ft-link" to="/contactUs">Contact Us</Link>
                <Link className="ft-link" to="/">Blog</Link>
                <Link className="ft-link" to="/pricing">Pricing</Link>
                <Link className="ft-link" to="/signup">SignUp</Link>
              </div>

            </div>
            {/* 2nd column */}
            <div className="col-6 col-md-3">
              <small className="text-white">Features</small>
              <div className="d-flex flex-column mt-3 gap-1">
                <Link className="ft-link" to="/">Schedule Online</Link>
                <Link className="ft-link" to="/">Increase Productivity</Link>
                <Link className="ft-link" to="/">Attract Customers</Link>
                <Link className="ft-link" to="/">Retain Customers</Link>

              </div>
              {/* 3rd column */}
            </div>
            {/* column3 */}
            <div className="col-6 col-md-3">
              <small className="text-white">Support</small>
              <div className="d-flex flex-column mt-3 mb-2 gap-1">
                <Link className="ft-link" to="/">Help</Link>
                <Link className="ft-link" to="/">Screen Sharing</Link>
                <Link className="ft-link" to="/">Affiliate Program</Link>
              </div>

              <div>
                <small className="text-white">Connect with Us</small>
                <div className="d-flex flex-row gap-2 mt-1">
                  <div>
                    <a href="#" className="rounded bg-secondary d-flex align-items-center justify-content-center text-white p-1" > <img src={fb} alt="fb" height="20" /></a>
                  </div>
                  <div>
                    <a href="#" className="rounded bg-secondary d-flex align-items-center justify-content-center text-white p-1" > <img src={vector} alt="vector" height="20" /></a>
                  </div><div>
                    <a href="#" className="rounded bg-secondary d-flex align-items-center justify-content-center text-white p-1" > <img src={twitter} alt="twitter" height="20" /></a></div>

                </div>
              </div>
            </div>
            {/* 4th column */}

            <div className="col-6 col-md-3">
              <small className="text-white">Contact Us</small>
              <div className="d-flex flex-column gap-1">
                <p className="mt-3 mb-1 w-100">Nerio Inc., 16192 Coastal Highway Lewes, Delaware 19958, USA</p>
                <Link className="ft-link" to="/"><img src={mail} alt="mail" height={12} className="me-1"></img>contact@Nerio.com</Link>

                <div className="d-flex flex-column">
                  <Link className="ft-link" to="/">Privacy Policy</Link>
                  <Link className="ft-link" to="/">Terms of Use</Link>
                  <Link className="ft-link" to="/">Legal</Link>
                  <Link className="ft-link" to="/">End User Agreement</Link>
                </div>

              </div>
            </div>

          </div>

          
        </div>
      </div>
      <div className="container-fluid bg-ft2 py-2 px-5">
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="row align-items-center ">
            <div className="col-12 col-md-10">
              <small className="text-white">By clicking the Allow Cookies button you agree to the use of cookies as described in our Privacy Policy.<a href="#" className="text-white ms-1" >Learn More</a></small>
            </div>
            <div className="col-12 col-md-2">
              <button className="btn btn-sm btn-warning fs-fs-6 fw-semibold">Accept & Continue<span className="ms-1"></span></button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Footer
