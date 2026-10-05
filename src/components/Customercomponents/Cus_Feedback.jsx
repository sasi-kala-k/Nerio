import React from 'react'
import avatar1 from '../../assets/images/Customers/avatar1.svg'
import avatar2 from '../../assets/images/Customers/avatar2.svg'
import avatar3 from '../../assets/images/Customers/avatar3.svg'
import avatar4 from '../../assets/images/Customers/avatar4.svg'



function Cus_Feedback() {
    const Feedback = [
        {
            quote: "Nerio has made managing my appointments incredibly easy. The platform is reliable, user-friendly, and the customer support team has been excellent.",
            name: "Sophia Bennett",
            role: "Photography Studio",
            location: "Washington, United States",
            avatar: avatar1
        },
        {
            quote: "Nerio has exceeded my expectations. I'm extremely satisfied and would recommend it to any business owner looking for a powerful and affordable appointment solution.",
            name: "Victoria Hayes",
            role: "Colon Therapist",
            location: "Kalamazoo, United States",
            avatar: avatar2
        },
        {
            quote: "I'm truly impressed with the support provided by the Nerio team. Setting everything up was simple, the team responded quickly and helped me every step of the way.",
            name: "James Carter",
            role: "Physician",
            location: "Brisbane, Queensland, Australia",
            avatar: avatar3
        },
        {
            quote: "Nerio has been outstanding from the very beginning. It is one of the most flexible and it has made managing appointments effortless.",
            name: "Alexander Brooks",
            role: "IT Services",
            location: "San Anton, United States",
            avatar: avatar4
        }
    ]

    return (
        <div className="container-fluid  my-5 px-3">
            <div className="text-center d-flex flex-column align-items-center justify-content-center mb-4 gap-3">
                <h2>What our customers say about us.
                </h2>
                <p className="w-75">Our customers inspire us every day. Their passion, dedication, and commitment to delivering exceptional service motivate us to keep improving. We are grateful for their trust, support, and the opportunity to be a part of their journey and success.</p>
            </div>
            <div className="d-flex align-items-center justify-content-center ">
                <div className="row g-4 g-lg-4 " style={{ maxWidth: '1000px' }}>
                    {Feedback.map((feedback, index) => (
                        <div key={index} className="col-12 col-md-6 mb-3">
                            <div className="bg-light border rounded mb-2 mb-lg-3 p-3">
                                <i className="text-muted">{feedback.quote}</i>
                            </div>
                            <div className="d-flex align-items-end">
                                <div className="rounded-circle shadow d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                    <img src={feedback.avatar} alt={feedback.name} height={60} />
                                </div>
                                <div className="d-flex flex-column align-items-start ms-2">
                                    <h6 className="mb-0">{feedback.name}</h6>
                                    <small>{feedback.role}</small>
                                    <small className="text-muted">{feedback.location}</small>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default Cus_Feedback
