import React from 'react'
import icon1 from '../../assets/images/Home/1.svg';
import icon2 from '../../assets/images/Home/2.svg';
import icon3 from '../../assets/images/Home/3.svg';


import './GetStartedIns.css';

function GetStartedIns() {
    return (

        <div className="container-fluid text-center my-3 my-lg-1 ">

            <div className="d-flex flex-column align-items-center gap-2 mb-1">
                <h2 className="fw-bold" >Getting Started in 3 Simple Steps  </h2>
                <small className="fs-5 ">Set up your account and start accepting bookings in less than 10<br></br> minutes </small>
            </div>
            <div className="d-flex gap-4 gap-lg-4 flex-wrap align-items-center justify-content-between my-5 mx-5 px-5 py-1 mx-auto " style={{maxWidth:'1200px'}}>

                <div className="d-flex flex-column align-items-center mx-auto " style={{ width: "300px" }}>
                    <div className=" circle-gradient-blue"
                    >
                        <img src={icon1} alt="icon1" height="25" />
                    </div>
                    <h4 className="mt-4 mb-3">Create Your Profile</h4>
                    <p className="text-wrap text-break ">Add your services, set your availability and customize your booking page to match your brand.</p>

                </div>
             

                <div className="d-flex flex-column align-items-center mx-auto" style={{ width: "300px" }}>
                    <div className=" circle-gradient-blue"
                    >
                        <img src={icon2} alt="icon2" height="25" />
                    </div>
                    <h4 className="mt-4 mb-3">Share Your Link</h4>
                    <p className="text-wrap text-break ">Embed the booking widget on your website or share your unique booking link directly with clients.</p>

                </div>
       

              

                <div className="d-flex flex-column align-items-center mx-auto" style={{ width: "300px" }}>
                    <div className=" circle-gradient-blue"
                    >
                        <img src={icon3} alt="icon3" height="25" />
                    </div> 
                    <h4 className="mt-4 mb-3">Get Booked</h4>
                    <p className=" ">Watch appointments fill your calendar as clients seamlessly book and pay online,24/7.</p>
 
                </div>

            </div>

</div>
            )
}

            export default GetStartedIns
