import React from 'react'
import './GetStarted.css'
import device from '../../assets/images/Home/device.svg'
import { useNavigate } from "react-router-dom"

function GetStarted() {
      const navigate = useNavigate()
    return (
        <div className="container-fluid bg-GS-color align-items-center py-1 py-lg-5">
            <div className="row mx-auto " style={{maxWidth:'1000px'}} >
                <div className="col-12 col-lg-6">
                    <h4 className="fs-2 fw-normal"> Give your customers the flexibility
                        to book online 24x7 with our
                        appointment scheduling software</h4>
                    <small>Sign up for our 14-day trial with all features. No credit card required.</small>

                    <button className="btn btn-sm rounded bg-success fs-6 text-white shadow mt-3" onClick={()=>navigate('/pricing')}>GET STARTED NOW</button>
                </div>
                <div className="col-12 col-lg-6">
                <img className="img-fluid" src={device} alt="device"/>
                </div>
            </div>

        </div>
    )
}

export default GetStarted
