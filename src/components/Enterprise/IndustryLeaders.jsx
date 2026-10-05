import React from 'react'
import image1 from '../../assets/images/Enterprise/IL_image1.svg'
import image2 from '../../assets/images/Enterprise/IL_image2.svg'
import image3 from '../../assets/images/Enterprise/IL_image3.svg'
import image4 from '../../assets/images/Enterprise/IL_image4.svg'
import image5 from '../../assets/images/Enterprise/IL_image5.svg'
import image6 from '../../assets/images/Enterprise/IL_image6.svg'
import './Enterprise.css'


function IndustryLeaders() {
    const items = [
        {
            icon: image1,
            title: "A Leading Global Technology Company",
            subtitle: "Dedicated Private Solution",
            description:
                "Our platform enables 200,000+ employees across 90+ global locations to easily schedule wellness and fitness sessions."
        },
        {
            icon: image2,
            title: "A Leading Medical Device Manufacturer",
            subtitle: "Private IT Support Scheduling Platform",
            description:
                "The platform helps 700+ support agents manage appointments for 200,000+ employees worldwide."
        },
        {
            icon: image3,
            title: "A Global Telecom Leader",
            subtitle: "On-Premise Meeting Platform",
            description:
                "The solution enables global enterprises to schedule video conferences seamlessly through Cisco’s infrastructure."
        },
        {
            icon: image4,
            title: "Veteran-Owned Government Partner",
            subtitle: "Consultation & Meeting Scheduling Platform",
            description:
                "Our platform enables 200,000+ employees across 90+ global locations to easily schedule wellness and fitness sessions."
        },
        {
            icon: image5,
            title: "A Leading Canadian University",
            subtitle: "LMS-Integrated Scheduling Platform",
            description:
                "The university's Workplace Learning department uses the platform to help staff easily schedule classes and learning sessions."
        },
        {
            icon: image6,
            title: "Government & Public Service Centers",
            subtitle: "Government Scheduling Platform",
            description:
                "Public offices use the platform to streamline scheduling and operations across departments and locations."
        }
    ];
    return (
        <div className="container-fluid bg-industryLeaders py-5">

            <div className=" d-flex flex-column align-items-center text-center gap-2 py-2 mb-4" >
                <h4 className="fw-bold">Trusted by Industry Leaders</h4>
                <p className="text-muted ">Our experience with leading organizations has helped us understand complex enterprise needs and build a flexible platform designed to adapt to every business requirement</p>
            </div>
            <div className="row mx-auto g-5 text-center" style={{ maxWidth: '800px' }}>
                {items.map((item, index) => (
                    <div key={index} className=" col-12 col-lg-6 ">
                        <div className=" bg-white px-2 mx-0 py-4 d-flex flex-column align-items-center gap-3 h-100">
                            <img src={item.icon} alt={item.title} height={28} />
                            <small className="text-primary">{item.title}</small>
                            <small>{item.subtitle}</small>
                            <hr className="divider" />
                            <p className="text-center w-100">{item.description}</p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default IndustryLeaders
