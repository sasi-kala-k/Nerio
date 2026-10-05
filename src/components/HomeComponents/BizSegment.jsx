import React from 'react'
import bizSeg1 from '../../assets/images/Home/bizSeg1.png';
import bizSeg2 from '../../assets/images/Home/bizSeg2.png';
import bizSeg3 from '../../assets/images/Home/bizSeg3.png';
import bizSeg4 from '../../assets/images/Home/bizSeg4.png';
import bizSeg5 from '../../assets/images/Home/bizSeg5.png';
import bizSeg6 from '../../assets/images/Home/bizSeg6.png';
import bizSeg7 from '../../assets/images/Home/bizSeg7.png';
import bizSeg8 from '../../assets/images/Home/bizSeg8.png';
import './BizSegment.css'
import { useNavigate } from "react-router-dom";

function BizSegment() {
    const navigate=useNavigate();

    return (
        <div className="container-fluid text-center my-lg-5 my-3">

            <div className="d-flex flex-column align-items-center gap-3">
                <h2 className="fw-light ">Nerio has the ability to serve almost any business segment</h2>
                <p className="fs-6 w-100 ">Our appointment management software is fit for professionals, service based local business, and mid-large enterprises across multiple industries.</p>
            </div>

            <div className="row g-4 align-items-center justify-content-center my-2 my-lg-5 my-lg-3 mx-auto" style={{ maxWidth: '1100px' }}>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto " style={{ maxWidth: "240px" }}>
                        <div className="circle-green rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg1} alt="biz1" height="25" />
                        </div>
                        <h6 className="mt-4">Health & Wellness</h6>
                        <small className="text-wrap text-break ">Wellness,Spa,Massage,Therapist,Accupuncture</small>
                    </div>
                </div>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto " style={{ maxWidth: "240px" }}>
                        <div className="circle-red rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg2} alt="biz2" height="25" />
                        </div>
                        <h6 className="mt-4">Education</h6>
                        <small className="text-wrap text-break">Colleges, Universities, Schools, Tutoring</small>

                    </div>
                </div>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto " style={{ maxWidth: "240px" }}>
                        <div className="circle-green rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg3} alt="biz3" height="25" />
                        </div>
                        <h6 className="mt-4">Medicine</h6>
                        <small className="text-wrap text-break">Doctors, Dentists, Chiropractors,Opticians</small>

                    </div>
                </div>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto " style={{ maxWidth: "240px" }}>
                        <div className="circle-orange rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg4} alt="biz4" height="25" />
                        </div>
                        <h6 className="mt-4">Fittness and Recreations</h6>
                        <small className="text-wrap text-break">Ideal for gyms,trainers,yoga  and dance classes</small>

                    </div>
                </div>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto " style={{ maxWidth: "240px" }}>
                        <div className="circle-red rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg5} alt="biz5" height="25" />
                        </div>
                        <h6 className="mt-4">Salon & Beauty</h6>
                        <small className="text-wrap text-break">No Contracts or cancellation fees- cancel anytime with no future charges</small>
                    </div>
                </div>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto" style={{ maxWidth: "240px" }}>
                        <div className="circle-blue rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg6} alt="biz6" height="25" />
                        </div>
                        <h6 className="mt-4">Professional Services</h6>
                        <small className="text-wrap text-break">Your data is always yours-export it aytime from Nerio, on any plan</small>
                    </div>
                </div>

                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center mx-auto" style={{ maxWidth: "240px" }}>
                        <div className="circle-blue rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg7} alt="biz7" height="25" />
                        </div>
                        <h6 className="mt-4">Government</h6>
                        <small className="text-wrap text-break">Government Offices, Volunteer scheduling</small>
                    </div>
                </div>
                <div className="col-12 col-lg-3 text-center mb-4">
                    <div className="d-flex flex-column align-items-center  mx-auto" style={{ maxWidth: "240px" }}>
                        <div className="circle-orange rounded-circle
                                         d-flex align-items-center justify-content-center"
                            style={{ height: "60px", width: "60px" }}>

                            <img src={bizSeg8} alt="biz8" height="7" />
                        </div>
                        <h6 className="mt-4">Other Services</h6>
                        <small className="text-wrap text-break">Perfect for retail stores, meeting, tours,interview, pet care and day care.</small>
                    </div>
                </div>


            </div >
            <button className="btn rounded-3  text-white fw-semibold px-lg-4 px-3 py-lg-2 py-1 mt-3 " style={{ backgroundColor: "#10B981"  }} onClick={()=>navigate('/customers')}>KNOW MORE</button>

        </div>

    )
}
export default BizSegment
