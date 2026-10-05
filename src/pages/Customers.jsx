import React from 'react'
import Cus_Feedback from "../components/Customercomponents/Cus_Feedback"
import Cus_Support from "../components/Customercomponents/Cus_Support"
import Cus_brand from "../components/Customercomponents/Cus_brand"
import GlobalReachMap from "../components/Customercomponents/GlobalReachMap"
import StartFreeTrial from "../components/Customercomponents/StartFreeTrial"

function Customers() {
  return (
    <>
    <div className="set-cus-bg d-flex flex-column align-items-center justify-content-center text-white text-center px-3 px-lg-0 gap-2" >
    <h1 className="w-100" style={{maxWidth:'900px'}}>Our customers are <span className="text-warning">our biggest strength.</span>
</h1>
<p  className="text-white p-cus-size" style={{maxWidth:'700px'}}>We build lasting relationships by delivering reliable service, exceptional support, and experiences that earn our customers’ trust every day.</p>
    </div> 

     <Cus_Feedback />
     <Cus_Support />
     <Cus_brand />
     <GlobalReachMap />
     <StartFreeTrial />
     </>
   
  )
}

export default Customers
