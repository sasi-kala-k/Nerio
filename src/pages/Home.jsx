import React from 'react'
import './Home.css'
import Reviews from "../components/HomeComponents/Reviews"
import BizSegment from "../components/HomeComponents/BizSegment"
import Pros from "../components/HomeComponents/Pros"
import GetStartedIns from "../components/HomeComponents/GetStartedIns"
import AppointmentBooking from "../components/HomeComponents/AppointmentBooking"
import Feedback from "../components/HomeComponents/Feedback"
import GlobalPlatform from "../components/HomeComponents/GlobalPlatform"
import Subscription from "../components/HomeComponents/Subscription"
import FAQ from "../components/HomeComponents/FAQ"
import GetStarted from "../components/HomeComponents/GetStarted"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate=useNavigate();
  return (
    <>
    
 
       <div className=" set-home-bg py-5 px-3 d-flex flex-column align-items-center justify-content-between gap-4 gap-lg-5 text-center">
        <h1 className="text-white cus-heading  fw-bold text-center mx-auto w-100" style={{maxWidth:'900px'}} >Discover the easiest way to<span className="text-warning ms-2 me-2">automate scheduling</span>and grow your business</h1>

        <p className="cus-text-size w-100 text-white fs-5" style={{maxWidth:'700px'}}>Online scheduling software for better appointment management that cut hours of  admin work,  Accept payments, reduce no-shows,manage staff, get more clients-and do morewith Nerio!</p>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="btn signup-btn rounded-4 text-center text-white fw-semibold fs-5 d-flex align-items-center justify-content-center px-5 py-3" onClick={()=>navigate('/signup')}>Sign up</button>
          <small className=" my-2 " style={{color:"#a9b4be"}}>Our free plan is free forever. No credit card required</small> 
        </div>
      </div>
  
   
        <Reviews /> 
        <BizSegment/>
        <Pros />
        <GetStartedIns/>
        <AppointmentBooking />
        <Feedback />
        <GlobalPlatform/>
        <Subscription />
        <FAQ />
        <GetStarted/>
        
   </>
  )
}

export default Home
