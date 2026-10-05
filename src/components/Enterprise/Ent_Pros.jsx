import React from 'react'
import dashboard from '../../assets/images/Enterprise/dashboard.svg'

function Ent_Pros() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center gap-2 py-5 px-3">
        <h4>Flexible. Powerful. Scalable.</h4>
        <p className="w-75 text-center">Our 24/7 booking platform delivers a fast, intuitive, and flexible experience that can be tailored to your business needs, helping you simplify scheduling, improve customer convenience, and increase satisfaction.</p>
        <img src={dashboard} className="img-fluid" alt="dashboard"/>
      </div>
    </div>
  )
}

export default Ent_Pros
