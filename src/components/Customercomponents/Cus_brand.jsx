import React from 'react'
import brandlogo1 from '../../assets/images/Customers/brand1.svg'
import brandlogo2 from '../../assets/images/Customers/brand2.svg'
import brandlogo3 from '../../assets/images/Customers/brand3.svg'
import brandlogo4 from '../../assets/images/Customers/brand4.svg'
import brandlogo5 from '../../assets/images/Customers/brand5.svg'
import brandlogo6 from '../../assets/images/Customers/brand6.svg'
import brandlogo7 from '../../assets/images/Customers/brand7.svg'
import brandlogo8 from '../../assets/images/Customers/brand8.svg'
import brandlogo9 from '../../assets/images/Customers/brand9.svg'
import brandlogo10 from '../../assets/images/Customers/brand10.svg'
import brandlogo11 from '../../assets/images/Customers/brand11.svg'
import brandlogo12 from '../../assets/images/Customers/brand12.svg'



function Cus_brand() {
    const Brand=[brandlogo1, brandlogo2,brandlogo3,brandlogo4,brandlogo5,brandlogo6,brandlogo7,brandlogo8,brandlogo9,brandlogo10,brandlogo11,brandlogo12]
  return (
    <div className="container-fluid d-flex flex-column align-items-center my-3 my-lg-5 gap-5">
        <h3 >Just a few of our customers</h3>
        <div className="row">
            {Brand.map((brand,index)=>(
                <div key={index} className="col-6 col-lg-3 d-flex align-items-center justify-content-center mb-5">
                <img src={brand} alt={`logo-${index}`} height={70}/>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Cus_brand
