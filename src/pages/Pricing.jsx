import React, { useState } from 'react'
import FAQ from "../components/HomeComponents/FAQ"
import { useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";



function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const navigate=useNavigate();
  // const [open, setOpen]= useState(false)
  const prices = {
    free: { monthly: '0.00', yearly: '0.00' },
    enterprise: { monthly: '79.99', yearly: '799.00' }
  }
  return (

    <div className=" my-5 ">

      <div className="d-flex flex-column align-items-center gap-2 mb-5">
        <h1 className="display-6 text-center text-md-center">Simple and transparent pricing</h1>
        <small className="fs-5 text-center">No contracts. No credit cards. No obligations. Cancel anytime.</small>
        <small className="text-center mt-5">Billed</small>
        <div className="bg-toggle d-inline-flex fs-6 mb-4 bg-secondary-subtle rounded-pill px-1 py-1">

          <button className={`btn btn-sm rounded-pill ${billing == 'monthly' ? 'btn-success text-white' : 'text-muted'}`} onClick={() => setBilling('monthly')}>Monthly</button>
          <button className={`btn btn-sm rounded-pill ${billing == 'yearly' ? 'btn-success text-white' : 'text-muted'}`} onClick={() => setBilling('yearly')}>Yearly</button>
        </div>

        <div className="border border-2 mx-auto" style={{ maxWidth: '900px' }}>
          <div className="row g-0">
            <div className="col-12 col-md-6 ">
              <div className="d-flex flex-column align-items-center mt-5 mb-2">
                <h6 className=" mb-1">FREE</h6>
                <small className="text-secondary fw-semibold fs-6">USD<span className="display-4 ms-1 text-black">{prices.free[billing]}</span></small>
                <small className="text-text-secondary me-1">per&nbsp;{billing === 'monthly' ? 'month' : 'year'}</small>
              </div>
              <button className="btn border border-1 rounded-1 w-100 text-dark" onClick={()=>navigate('/contactUs')}>Sing Up Now! </button>

              <div className="text-secondary flex-column d-flex align-items-center justify -content-center mt-2">
                <small > 1 Staff, 5v Services</small>
              </div>
              <hr className="mb-3" />
              <ul className="small pb-5 text-muted item-gap ">
                <li><small>Website integration</small></li>
                <li><small>Square Payments and Point of Sale</small></li>
                <li><small>Zapier (Connect with over 1000
                  apps)</small></li>
                <li><small>Automatic reminders</small></li>
                <li><small>Mobile app</small></li>
                <li><small>100 appointments per month</small></li>


              </ul>

            </div>

            <div className="col-12 col-md-6 bg-cus-green px-1">
              <div className="d-flex flex-column align-items-center mt-5 mb-2">
                <h6 className="text-white mb-1">ENTERPRISE</h6>
                <span className="text-secondary fw-semibold">USD<span className="display-4 ms-1">{prices.enterprise[billing]}</span></span>
                <small className="text-secondary">per&nbsp;<span>{billing === 'monthly' ? 'month' : 'year'}</span></small>
              </div>
              <button className="btn border border-1 rounded-1 w-100 bg-white fw-semibold" onClick={()=>navigate('/contactUs')}>Start Trial!</button>

              <div className="text-secondary flex-column d-flex align-items-center justify -content-center mt-2">
                <small > 14 Days Free Trial</small>
                <small> Multi-Location</small>
                <small > (2 locations included)</small></div>

              <hr className="text-white fw-bold" />
              <small className="fw-semibold text-white">Professional plus...</small>
              <ul className="small text-white pb-5 item-gap">
                <li>SMS text customization</li>
                <li>Dedicated relationship manager
                  available at additional cost</li>
                <li>Zapier Removal of Appointy branding</li>
                <li>Premium support with Service Level
                  Agreement</li>
                <li>Custom development available at
                  additional cost</li>


              </ul>

            </div>

          </div>
          <button
           className="navbar-toggler text-secondary border-top border-bottom border-2 w-100 py-2"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#mobileNavLinks"
    aria-controls="mobileNavLinks"
    aria-expanded="false"
      aria-label="Toggle navigation"
            >
            See all features
          </button>
        
                {/* <button
                               
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#mobileNavLinks"
                                    aria-controls="mobileNavLinks"
                                    
                                    aria-expanded="false"
                                    aria-label="Toggle navigation" >
                                    <GiHamburgerMenu className="text-white" size={28} />
                                </button> */}
          <div className=" collapse  d-flex flex-column gap-2" id="mobileNavLinks">
            <h5>Schedule</h5>
            <h5>Automate</h5>
            <h5>Marketing</h5>
            <h5>Manage</h5>
            <h5>Customize</h5>
          </div>
          
        </div>
        <div className="" style={{ maxWidth: '650px' }}>
          <small>* Nerio Fair Usage Policy: In order to ensure equitable access and system performance across all our user base, Nerio implements a fair usage policy limit of 2,000 appointments
            a day. In the event your expected volume is higher than our fair usage policy, please contact sales@nerio.com</small>
          <small> # Conditions apply</small>
        </div>


      </div>




      <FAQ />
    </div>
  )
}

export default Pricing
