import React from 'react'

function FAQ() {
    const faq = [
        {
            Q: "How does the free trial work?",
            A: "Our 14 day trial is 100% free and does not require any credit card information to start. If at the end of your trial you would like to upgrade, great. If not, your plan will automatically be downgraded to the free plan."
        },
        {
            Q: "Do I need to choose a plan now?",
            A: "No. You get the full featured, unlimited version of our service completely free for 14 days. Once you're ready to upgrade, you may choose a plan which suits your needs."
        },
        {
            Q: "Can I switch plans later?",
            A: "Absolutely. You can switch between our paid plans, or cancel your account altogether, whenever you like. We will adjust any payments accordingly."
        },
        {
            Q: "What payment types do you accept?",
            A: "We accept payments from MasterCard, Visa, Visa Debit, American Express and PayPal. Remember, you do not need to supply card details to start your free trial."
        },
        {
            Q: "Do you have any contracts or cancellation fees?",
            A: "No. Nerio is a pay-as-you-go service. We do not have contracts or cancellation fees. You can cancel whenever you want. If you cancel, you'll be billed for the current month, but you won't be billed again."
        },
        {
            Q: "Who owns my data?",
            A: "You do! It's your data after all! We want customers to use Nerio because they love it, not because their data is stuck in it. You can export all of your information from Nerio at any time, no matter what plan you choose."
        }
    ]
    return (
        <div className="container-fluid px-3 py-3 py-lg-5 text-center">
            <div className="d-flex flex-column">
                <h4 className="display-6 pb-3 pb-lg-5">Frequently asked questions</h4>
                <div className="row g-4 g-lg-5 text-start mx-auto" style={{ maxWidth: '1000px' }}>
                    {faq.map((item, index) =>
                    (<div key={index} className="col-12 col-md-6">
                        <h6 className="fw-semibold text-secondary">{item.Q}</h6>
                        <small className="text-muted">{item.A}</small>
                    </div>
                    ))}
                    <hr />
                </div>

                <div className="row text-start mx-auto" style={{ maxWidth: '1000px' }}>
                    <div className="col-12"></div>
                    <h6 className="fw-semibold text-secondary ">Have any other questions?</h6>
                    <small className="text-muted">If you have questions about Nerio or the sign up process, please email us at contact@Nerio.com and we will be glad to answer all
                        your questions!</small>
                </div>
            </div>
        </div>
    )
}

export default FAQ
