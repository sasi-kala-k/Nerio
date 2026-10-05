import React from 'react'
import './Customers.css'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <>
      <div className="bg-contactus d-flex flex-column align-items-center text-white text-center justify-content-center gap-3 px-3 " >
        <h1 style={{ maxWidth: '500px' }}>Helping You Every Step<span className="text-warning"> of the Way</span></h1>
        <small className="text-white" style={{ maxWidth: '700px' }}>Have questions? Our Nerio team is always ready to assist. Connect with us by email, chat, or phone, and we’ll be happy to help.</small>
      </div>
      <div className="px-3">
        <h3 className="fw-light my-4">Here are our Here are our contact details:</h3>
        <h3 className="mb-4">Our offices</h3>

        <div className="mb-4" style={{maxWidth:'300px'}}>
          <h6>USA</h6>
          <p>Nerio Software Inc.,
            16192 Coastal Highway
            Lewes, Delaware 19958
            USA</p>
        </div>

        <div className="mb-4" style={{maxWidth:'300px'}}>
          <h6>SINGAPORE</h6>
          <p>Nerio Global Pte Ltd,
            20 Bendemeer Road #03-12,
            Singapore 339914</p>
        </div>

        <div className="d-flex flex-column mb-4 ">
          <small>RFP/RFI/Enterprise opportunity: <Link className="text-decoration-none" to="/sales@nerio.com">sales@nerio.com</Link></small>
          <small>Corporate:<Link className="text-decoration-none" to="/">corporate@nerio.com</Link></small>
          <small className="mb-3"> Investor relations:<Link className="text-decoration-none" to="/">invest@nerio.com</Link> </small>
          <small>Collaboration enquiries:<Link className="text-decoration-none" to="/"> marketing@nerio.com</Link> </small>
          <small> Write for Us:<Link className="text-decoration-none" to="/"> Guest posting request</Link></small>
        </div>

        <div className="d-flex flex-column mb-4">
          <h6>Customer service:</h6>
          <small>Support Time: 24 Hours : Monday to Friday.</small>
          <small>6:30 AM to 3:30 PM (PST) : Saturday.</small>
          <small>Contact: UK +44 20 3871 3003</small>
          <small>USA +1 786 766 7676</small>
        </div>

        <div className="d-flex flex-column mb-4">
          <small>General enquiries:<Link className="text-decoration-none" to="/">contact@nerio.com</Link></small>
          <small>Technical issues (screen sharing)<Link className="text-decoration-none" to="/"> Schedule an appointment</Link></small>


        </div>

      </div>
    </>
  )
}

export default ContactUs
