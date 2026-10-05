import React from 'react'
import icon1 from '../../assets/images/Customers/support1.svg'
import icon2 from '../../assets/images/Customers/support2.svg'
import icon3 from '../../assets/images/Customers/support3.svg'
import './Cus_Support.css'


function Cus_Support() {
    return (
        <div className="container-fluid border bg-light my-5 py-5"  >
            <div className="d-flex flex-column align-items-center justify-content-center text-center gap-2">
                <h3>Your needs are our priority</h3>
                <p className="p-cus-size"> Nerio is backed by a dedicated support team that is always ready to help through email, chat, and phone.</p>
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 gap-lg-5 my-4">
                <div className=" d-flex flex-column align-items-center justify-content-center" style={{width:'200px'}}>
                    <div className="circle d-flex align-items-center justify-content-center mb-2">
                        <div className="nested-circle shadow d-flex align-items-center justify-content-center">
                            <img src={icon1} alt="icon1" height={20} />
                        </div>
                    </div>
                    <h6 >Email Us!</h6>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{width:'200px'}}>
                    <div className="circle d-flex align-items-center justify-content-center mb-2">
                        <div className="nested-circle shadow d-flex align-items-center justify-content-center">
                            <img src={icon2} alt="icon2" height={20} />
                        </div>
                    </div>
                    <h6 >Live Chat Support
</h6>
                </div>
                <div className=" d-flex flex-column align-items-center justify-content-center" style={{width:'200px'}}>
                    <div className="circle d-flex align-items-center justify-content-center mb-2">
                        <div className="nested-circle shadow d-flex align-items-center justify-content-center">
                            <img src={icon3} alt="icon3" height={20} />
                        </div>
                    </div>
                    <h6>Phone Support Available
</h6>

                </div>
            </div>

<div className=" d-flex align-items-center justify-content-center text-center pt-3">
    <p className="p-cus-size">Our support team responds quickly and efficiently, ensuring you get the help you need when it matters most. We’re committed to delivering fast, reliable assistance and an exceptional customer experience.
</p>
</div>

        </div>

    )
}

export default Cus_Support
