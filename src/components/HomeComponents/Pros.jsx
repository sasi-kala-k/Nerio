import React from 'react'
import pros1 from '../../assets/images/Home/pros1.svg';
import pros2 from '../../assets/images/Home/pros2.svg';
import pros3 from '../../assets/images/Home/pros3.svg';
import pros4 from '../../assets/images/Home/pros4.svg';
import './Pros.css';
import { useNavigate } from "react-router-dom";

function Pros() {
      const navigate = useNavigate()
    return (

        <div className="container-fluid text-center my-4 py-3 py-lg-4">

            <div className="d-flex flex-column align-items-center gap-2 mb-4 mb-lg-5">
                <h1 className="display-6">Nerio - simple, functional, powerful: no compromises! </h1>
                <p className="fs-5  ">Our online appointment scheduling software has everything you need to grow & manage your business in one easy -to-use and powerful user interface.</p>
            </div>

             <div className="d-flex flex-wrap gap-4 gap-lg-5 align-items-center justify-content-center my-4 ">

            <div className="d-flex flex-column align-items-center  mb-3 mb-lg-5" style={{ width: "220px" }}>
                <div className=" circle-icon-pros d-flex align-items-center justify-content-center"
                >
                    <img src={pros1} alt="pros1" height="30" />
                </div>
                <h6 className="mt-3">Schedule online</h6>
                <small className="text-wrap text-break ">Eliminate email/call back-end-forth with web-based scheduling.</small>

            </div>
            <div className="d-flex flex-column align-items-center  mb-3 mb-lg-5" style={{ width: "220px" }}>
                <div className=" circle-icon-pros d-flex align-items-center justify-content-center"
                >
                    <img src={pros2} alt="pros2" height="20" />
                </div>
                <h6 className="mt-3">Booset productivity</h6>
                <small className="text-wrap text-break ">Automate tasks and manage schedules in one place.</small>

            </div>
            <div className="d-flex flex-column align-items-center  mb-3 mb-lg-5" style={{ width: "230px" }}>
                <div className=" circle-icon-pros d-flex align-items-center justify-content-center"
                >
                    <img src={pros3} alt="pros3" height="25" />
                </div>
                <h6 className="mt-3">Attract customers</h6>
                <small className="w-100">Get bookings from Facebook, Instagram, Google and your website.</small>

            </div>
            <div className="d-flex flex-column align-items-center  mb-3 mb-lg-5" style={{ width: "220px" }}>
                <div className=" circle-icon-pros d-flex align-items-center justify-content-center"
                >
                    <img src={pros4} alt="pros4" height="25" />
                </div>
                <h6 className="mt-3">Retain customers</h6>
                <small className="text-wrap text-break ">Understand your customers better and personalized experiences</small>

            </div>
            </div>
            <button className="btn rounded-4  text-white fw-semibold px-4 py-2 mb-5" style={{ backgroundColor: "#10B981" }} onClick={()=>navigate('/customers')}>LEARN MORE</button>

        </div>
    )
}

export default Pros
