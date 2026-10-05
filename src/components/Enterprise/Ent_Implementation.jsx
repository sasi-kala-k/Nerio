import React from 'react'

const steps = [
    {
        number: "01",
        title: " Discovery & Strategy",
        description: "We begin by understanding your business workflows through focused workshops, identifying scheduling challenges, user needs, and technical requirements."
    },
    {
        number: "02",
        title: "Strategy & Solution Design",
        description: "We turn your requirements into a detailed project plan and scalable system architecture, defining workflows, integrations, and security standards."
    },
    {
        number: "03",
        title: "Solution Development",
        description: "Based on the approved design and requirements, our team develops a tailored enterprise scheduling solution with seamless integration across your internal and third-party systems."
    },
    {
        number: "04",
        title: "Testing & Validation",
        description: "The solution undergoes user testing, with feedback incorporated to meet your exact business needs."
    }
]

function Ent_Implementation() {
    return (
        <div className="py-5 px-3 px-lg-5">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '750px' }}>
                <h4 className="fw-bold">A Goal-Focused Implementation Approach Built Around Your Success</h4>
                <p className="text-muted">From initial consultation to final deployment, our expert-led process ensures a seamless implementation tailored to your exact business needs.</p>
            </div>

            <div className="d-flex flex-column gap-4 mx-auto" style={{ maxWidth: '700px' }}>
                {steps.map((step, index) => (
                    <div key={index} className="d-flex gap-3">
                        <div className="fw-bold" >
                            <h3 className="text-info-subtle mb-0"> {step.number}</h3>
                            <h6 className="fw-bold">{step.title}</h6>
                        </div>
                        <div>
                            
                            <p className="text-muted mb-0">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ent_Implementation