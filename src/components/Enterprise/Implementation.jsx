import React from 'react'
import dotIcon from '../../assets/images/Enterprise/circle.svg'
import './Enterprise.css'

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We begin by understanding your business workflows through focused workshops, identifying scheduling challenges, user needs, and technical requirements.",
        space: "right"
    },
    {
        number: "02",
        title: "Strategy & Solution Design",
        description: "We turn your requirements into a detailed project plan and scalable system architecture, defining workflows, integrations, and security standards.",
        space: "left"
    },
    {
        number: "03",
        title: "Solution Development",
        description: "Based on the approved design and requirements, our team develops a tailored enterprise scheduling solution with seamless integration across your internal and third-party systems.",
        space: "right"
    },
    {
        number: "04",
        title: "Testing & Validation",
        description: "The solution undergoes user testing, with feedback incorporated to meet your requirements.",
        space: "left"
    },
    {
        number: "05",
        title: "Training & Enablement",
        description: "To drive successful adoption, we provide tailored training through on-site sessions, videos, guides, and flexible training models for different user groups.",
        space: "right"
    },
    {
        number: "06",
        title: "Go-Live & Deployment",
        description: "The solution goes live with flexible rollout options. Our team provides end-to-end support to ensure a smooth and successful deployment.",
        space: "left"
    },
    {
        number: "07",
        title: "Ongoing Support & Maintenance",
        description: "After deployment, our team continuously monitors performance and delivers regular security patches, compatibility updates.",
        space: "right"
    }
]

function Implementation() {
    return (
        <div className="my-5">
            <div className="d-flex flex-column align-items-center text-center py-3 gap-2">
                <h3>A Goal-Focused Implementation Approach Built Around Your Success</h3>
                <p>From initial consultation to final deployment, our expert-led process ensures a seamless implementation tailored to your exact business needs</p>
            </div> 
            
            <div className="mx-auto position-relative " style={{ maxWidth: '1000px', }}>
                <div className="dotted-line"></div>
                {steps.map((step, index) => (
                    <div key={index} className={`row mx-0 flex-nowrap ${step.space == "left" ? 'flex-lg-row-reverse' : ''} `}>
                        <div className={`col-9 col-lg-5 order-2 order-lg-1 mb-3 ${step.space == "right" ? " ps-2 ps-lg-5" : ''}`}>
                            <h4 className={` ${step.space == "right" ? "text-primary" : ' text-info'}`}>
                                <span className={`fs-1 me-2  ${step.space == "right" ? "left-no" : "right-no"}`}>{step.number}</span>{step.title}
                            </h4>
                            <p className="w-100" style={{maxWidth:'390px'}}>{step.description}</p>
                        </div>
                        <div className="col-3 col-lg-2 order-1 order-lg-2 d-flex justify-content-center align-items-center  ">
                            <div className={`circle-img ${step.space=="right"? "border-primary": "border-info"} `}></div>
                        </div>
                        <div className=" col-lg-5 d-none d-lg-block order-lg-3"></div>


                    </div>

                ))}

           
            </div>

        </div>
    )
}

export default Implementation