import React from 'react'
import image1 from '../../assets/images/Enterprise/feature1.svg'
import image2 from '../../assets/images/Enterprise/feature2.svg'
import image3 from '../../assets/images/Enterprise/feature3.svg'
import image4 from '../../assets/images/Enterprise/feature4.svg'
import image5 from '../../assets/images/Enterprise/feature5.svg'


function Ent_Features() {
    const features = [
        {
            title: "Tailored Workflows for Your Scheduling Needs",
            desc1: "Powered by modern technology, our flexible architecture enables us to deliver customized features and workflows that seamlessly align with your unique business processes—while saving time and costs.",
            desc2: "Automate payments, streamline employee scheduling and payroll, manage queues, enhance client experiences, generate custom reports, and more—all from one powerful platform.",
            image: image1,
            imageLeft: false

        },
        {
            title: "Seamless Internal & External Integrations",
            desc1: "Our powerful API integrates seamlessly with your existing IT infrastructure and the third party tools your business relies on every day.",
            desc2: "Enable secure, seamless access with single sign-on integration, connecting your organization's authentication systems and allowing users to log in instantly with their existing credentials.",
            image: image2,
            imageLeft: true
        },
        {
            title: "Personalized Support & Account Care",
            desc1: "We provide flexible, 24/7 support tailored to the needs of every user group through email, phone, and live chat. Our dedicated support SLAs ensure timely responses, faster issue resolution, and a reliable customer experience.",
            desc2: " A dedicated account manager will be assigned to your project, serving as your primary point of contact for seamless communication, expert guidance, and prompt issue resolution.",
            image: image3,
            imageLeft: false
        },
        {
            title: "Secure Private & On-Premise Deployment",
            desc1: "We support flexible hosting options, including on-premise deployment with your organization's data center or private cloud hosting in a dedicated server in your preferred region and hosting environment.",
            desc2: "We support flexible hosting options, including on-premise deployment with your organization's data center or private cloud hosting in a dedicated server in your preferred region and hosting environment.",
            image: image4,
            imageLeft: true
        },
        {
            title: "Data Security & Compliance",
            desc1: "Our robust security infrastructure is designed to meet stringent security standards, with support for independent assessments, compliance reviews, and requires penetration testing licenses as ongoing protection.",
            desc2: "We lead our industry-leading security standards with ISO 27001 certification, SSL protection, and end-to-end encryption to safeguard your data at all times.",
            image: image5,
            imageLeft: false
        }
    ]
    return (
  <div className="py-5 px-3 px-lg-5">
      <div className="d-flex flex-column align-items-center justify-content-center text-center gap-2 mb-3 ">
        <h4>A Tailored Scheduling Solution Built Around Your Needs</h4>
        <p className="w-100 text-center">Maximize operational efficiency with scalable solutions, powerful API capabilities, and expert support at every stage.</p>
       </div>

        <div className=" mx-auto px-3 "  >
        {features.map((fea,index)=>(
<div key={index} className={`row mx-auto align-items-center g-3 mb-5 ${fea.imageLeft ? 'flex-row-reverse':''}`} style={{maxWidth:""}}>
<div className="col-12 col-md-6 px-5 text-center text-lg-start ">
    <h5 >{fea.title}</h5>
    <p className="" >{fea.desc1}</p>
    <p className="">{fea.desc2}</p>
    </div>
    <div className="col-12 col-md-6 align-items-end px-5">
        <img src={fea.image} alt={fea.title} className="img-fluid" />   
    </div>
    </div>
        ))}

        </div>
</div>
    )
}

export default Ent_Features
