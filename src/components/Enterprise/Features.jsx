import React from 'react'
import image1 from '../../assets/images/Enterprise/icon1.svg'
import image2 from '../../assets/images/Enterprise/icon2.svg'
import image3 from '../../assets/images/Enterprise/icon3.svg'
import image4 from '../../assets/images/Enterprise/icon4.svg'
import image5 from '../../assets/images/Enterprise/icon5.svg'
import image6 from '../../assets/images/Enterprise/icon6.svg'
import image7 from '../../assets/images/Enterprise/icon7.svg'
import image8 from '../../assets/images/Enterprise/icon8.svg'



function Features() {
    const items = [
        {
            icon: image1,
            title: "Unified Scheduling",
            description:
                "Enable seamless bookings across Google Search, Maps, websites, and applications with our 24/7 online scheduling solution"
        },
            {
            icon: image2,
            title: "Role-Based Access",
            description:
                "Set role-based permissions to ensure users access only the features and information relevant to their responsibilities"
        },
           {
            icon: image3,
            title: "Insights & Analytics",
            description:
                "Manage your bookings, users, payments, and key business insights easily, with flexible options to print "
        },
           {
            icon: image4,
            title: "Alerts & Notifications",
            description:
                "Get instant booking updates and automated reminders via SMS, email, or in-app notifications."
        },
        {
            icon: image5,
            title: "Organizational Hierarchy",
            description:
                "Seamlessly manage teams, locations, and users across multiple regions from one centralized platform."
        },
         {
        icon: image6,
        title: "Data Management",
        description: "Centralize client profiles, appointment details, and purchase history to gain valuable insights and deliver personalized experiences"
    },
    {
        icon: image7,
        title: "Mobile App",
        description: "Manage your appointments and stay updated on your schedule anytime with our easy-to-use mobile app for Android and iOS."
    },
    {
        icon: image8,
        title: "PayConnect",
        description: "Accept secure full or partial payments with seamless integration across popular payment gateways."
    }
       
    ];
    return (
        <div className="container-fluid bg-white py-5">

            <div className=" d-flex flex-column align-items-center text-center gap-2 py-2 mb-4" >
                <h3 className="">Powerful features for seamless enterprise appointment scheduling</h3>
                
            </div>
            <div className="row mx-auto g-0 g-lg-4 text-center" style={{ maxWidth: '1000px' }}>
                {items.map((item, index) => (
                    <div key={index} className=" col-12 col-lg-6 ps-5">
                        <div className=" px-3 mx-0 ps-0 ps-lg-5 py-4 d-flex flex-column align-items-center align-items-lg-start gap-2 gap-lg-3  ">
                            <img src={item.icon} alt={item.title} height={28} />
                            <small className="text-black">{item.title}</small>
                           <small className=" text-center text-lg-start w-100">{item.description}</small>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Features
