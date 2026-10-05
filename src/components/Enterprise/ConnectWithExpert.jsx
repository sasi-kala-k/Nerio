import React from 'react'
import expert1 from '../../assets/images/Enterprise/expert1.svg'
import expert2 from '../../assets/images/Enterprise/expert2.svg'
import expert3 from '../../assets/images/Enterprise/expert3.svg'
import expert4 from '../../assets/images/Enterprise/expert4.svg'
import './Enterprise.css'

function ConnectWithExpert() {
    const experts = [
        {
            image: expert1,
            name: "Sarang Verma",
            designation: "CHIEF OPERATING OFFICER"
        },
        {
            image: expert2,
            name: "Amrit Chaurasiya",
            designation: "SR. ENTERPRISE ACCOUNT MANAGER"
        },
        {
            image: expert3,
            name: "Manvi Singh",
            designation: "ASSOCIATE ENTERPRISE SALES"
        },
        {
            image: expert4,
            name: "Advaitn Nair",
            designation: "ASSOCIATE ENTERPRISE SALES"
        },
    ]
    return (
        <div >
            <div className="bg-ConnectWithExpert d-flex flex-column align-items-center gap-3 py-5 px-3 px-lg-5 text-center" >
                <h3 className="fs-4 fs-lg-3">Transform your organization’s scheduling with a solution tailored to your needs.</h3>
                <button className="btn btn-primary cus-size-CWE rounded-pill px-1 px-lg-3 py-1 py-lg-2">CONNECT WITH OUR ENTERPRISE SOLUTION EXPERTS</button>
            </div>

            <div className="bg-primary text-white d-flex flex-column align-items-center gap-5 py-5 text-center">
                <h4 >Connect with our team of experts</h4>
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
                    {experts.map((expert, index) => (
                        <div key={index} className="d-flex flex-column align-items-center text-center ">
                            <div className="circle-icon-CWE d-flex align-items-center justify-content-center ">
                                <img src={expert.image} alt={expert.name} height={60} />
                            </div>
                            <small className="text-white fw-semibold fs-6">{expert.name}</small>
                            <small className="text-white">{expert.designation}</small>
                        </div>
                    
                ))}
            </div>
            <small className="text-white w-100 px-3">You can email us your requirements at sales@nerio.com. Or, simply book a quick call with our product experts from below.</small>

        </div>
        </div >
  )
}

export default ConnectWithExpert
