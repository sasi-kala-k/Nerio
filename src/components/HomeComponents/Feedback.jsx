import React from 'react'
// import myvideo from '../../assets/images/Home/myvideo.mp4'; 
import feedback from '../../assets/images/Home/feedback.svg'
import './Feedback.css'

function Feedback() {
    return (
        <div className="container-fluid bg-feedback-color py-5">

            <div className="d-flex  flex-column flex-lg-column align-items-center justify-content-center gap-2 mb-3">
                <h1 className="display-6 text-center text-text-lg-center">Our customers love our product</h1>
                <p className="fs-5 text-center ">Don't take our word for it. See what they have to say about our online appointment scheduler</p>
            </div>
            <div className="d-flex justify-content-center">
            <video controls width="100%" className="w-100"  style={{ maxWidth: "1200px", height: "auto", aspectRatio: "16/9" }}>
                {/* <source src={myVideo} alt="myVideo" type="video/mp4" /> */}
                Customer Feedback
            </video>
            </div>

            <div className="py-3 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 gap-lg-5 flex-wrap">
                <div className="bg-white p-2 p-lg-2 text-center text-md-start w-100 "style={{ maxWidth: "400px"}}>
                    <i>"It's definitely beneficial to help your business grow"</i>
                    <div className="d-flex gap-2 mt-3">
                        <div className="circle-black">BB</div>
                        <div className="d-flex flex-column">
                            <h6>Arthur Iskhakov</h6>
                            <span>Barber's Blueprint</span>
                            <span>New York, United States</span>
                        </div>
                    </div>

                </div>

                <div className="bg-white p-2 p-lg-2 text-center text-md-start w-100" style={{ maxWidth: "400px"}}>
                    <i>"fraction of the cost! I am thrilled"</i>
                    <div className="d-flex gap-2 mt-3">
                        <div><img src={feedback} alt="feedback" height="60" /> </div>
                        <div className="d-flex flex-column">
                            <h6>Marcella Clark</h6>
                            <span>Colon Therapist</span>
                            <span>Kalamazoo, United States</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Feedback
