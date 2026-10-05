import React from 'react'

import device from '../../assets/images/Customers/Cus_device.svg'

function StartFreeTrial() {
    return (
        <div className="container-fluid align-items-center py-1 py-lg-5 my-3">
            <div className=" d-flex flex-wrap flex-lg-nowrap gap-4 gap-lg-0 mx-auto " style={{ maxWidth: '900px' }} >
                <div className="d-flex flex-column align-items-start gap-2 gap-lg-3 ">
                    <h2 className="">Start Your Free Trial Today
                    </h2>
                    <p >Start your free 14-day trial today and get full access to every feature. No credit card required. Cancel anytime. 
                    </p>

                    <button className="btn btn-sm rounded bg-success fs-6 text-white shadow">Start for Free</button>
                </div>
                <div>
                    <img className="img-fluid" src={device} alt="device" />
                </div>
            </div>

        </div>
    )
}

export default StartFreeTrial
