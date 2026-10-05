import React, { useState } from 'react'
import './Subscription.css'
import { useNavigate } from "react-router-dom";
function Subscription() {
    const [billing, setBilling] = useState('monthly')
    const navigate= useNavigate();
    const prices = {
        free: { monthly: '0.00', yearly: '0.00' },
        enterprise: { monthly: '79.99', yearly: '799.00' }
    }
    return (

        <div className="container-fluid bg-subs-color my-5 ">

            <div className="d-flex flex-column align-items-center gap-2 mb-5">
                <h1 className="display-6 text-center text-md-center">Affordable scheduling tool for everyone</h1>
                <p className="fs-5 text-center">Free, fully-functional 14-day trial - no contract, no credit required!</p>

                <div className="bg-toggle d-inline-flex fs-6 mb-4 bg-secondary-subtle rounded-pill px-1 py-1">
                    <button className={`btn btn-sm rounded-pill ${billing == 'monthly' ? 'btn-success text-white' : 'text-muted'}`} onClick={()=>setBilling('monthly')}>Monthly</button>
                    <button className={`btn btn-sm rounded-pill ${billing == 'yearly' ? 'btn-success text-white' : 'text-muted'}`} onClick={()=>setBilling('yearly')}>Yearly</button>
                </div>

                <div className="container" style={{maxWidth:'900px'}}>
                    <div className="row">
                        <div className="col-12 col-md-6 border border-3">
                           <div className="d-flex flex-column align-items-center mt-5 mb-2">
                                <h6 className=" mb-1">FREE</h6>
                                <small className="text-secondary fw-semibold fs-6">USD<span className="display-4 ms-1 text-black">{prices.free[billing]}</span></small>
                                <small className="text-text-secondary me-1">per&nbsp;{billing === 'monthly' ? 'month' : 'year'}</small>
                            </div>
                            <button className="btn border border-1 rounded-1 w-100 text-dark" onClick={()=>navigate('/signup')}>Sing Up Now! </button>
                            
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

                        <div className="col-12 col-md-6 bg-cus-green">
                            <div className="d-flex flex-column align-items-center mt-5 mb-2">
                                <h6 className="text-white mb-1">ENTERPRISE</h6>
                                <span className="gray-font fw-semibold">USD<span className="display-4 ms-1">{prices.enterprise[billing]}</span></span>
                                <small className="gray-font">per&nbsp;<span>{billing === 'monthly' ? 'month' : 'year'}</span></small>
                            </div>
                            <button className="btn border border-1 rounded-1 w-100 bg-white fw-semibold" onClick={()=>navigate('/trial')}>Start Trial!</button>
                            
                            <div className=" d-flex flex-column  align-items-center justify-content-center mt-2"> 
                            <small className="gray-font" > 14 Days Free Trial</small>
                            <small className="gray-font"> Multi-Location</small>
                            <small className="gray-font"> (2 locations included)</small></div>

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
                </div>

            </div>
        </div>
    )
}

export default Subscription
