import React from 'react'
import './GlobalPlatform.css'
import logo1 from '../../assets/images/Home/brand1.svg'
import logo2 from '../../assets/images/Home/brand2.svg'
import logo3 from '../../assets/images/Home/brand3.svg'
import logo4 from '../../assets/images/Home/brand4.svg'
import logo5 from '../../assets/images/Home/brand5.svg'
import logo6 from '../../assets/images/Home/brand6.svg'
import logo7 from '../../assets/images/Home/brand7.svg'
import logo8 from '../../assets/images/Home/brand8.svg'

function GlobalPlatform() {
    const row1 = [logo1, logo2, logo3, logo4, logo5]
    const row2 = [logo6, logo7, logo8]

    return (
        <div className="overflow-hidden w-100 bg-white py-5">
            <h1 className="display-6 text-center mb-4">We have been recognized on a number of global platforms</h1>

            {/* Row 1 - scrolls left */}
            <div className="brand-row-wrapper mb-5 mt-5">
                <div className="d-flex align-items-center gap-5 brand-scroll-track scroll-left">
                    {[...row1,...row1,...row1].map((logo, index) => (
                        <img key={`a-${index}`} src={logo} alt={`brand-${index}`} className="brand-logo" />
                    ))}
                   
                </div>
            </div>

            {/* Row 2 - scrolls right (opposite direction, common design pattern) */}
            <div className="brand-row-wrapper">
                <div className="d-flex align-items-center gap-5 brand-scroll-track scroll-right">
                    {[...row2,...row2,...row2,...row2,...row2].map((logo, index) => (
                        <img key={`c-${index}`} src={logo} alt={`brand-${index}`} className="brand-logo" />
                    ))}
                   
                </div>
            </div>

        </div>
    )
}

export default GlobalPlatform