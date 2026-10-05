import React from 'react'
import map from '../../assets/images/Customers/Map.png';
import './GlobalReachMap.css'

function GlobalReachMap() {
  return (
    <div className="container-fluid bg-secondary-subtle  py-5 ">
        <div className="mx-auto d-flex flex-column align-items-center gap-3 gap-lg-5" style={{maxWidth:'1000px'}}>
        
      <h4 className="text-center ">Trusted by 130,000+ customers in over 110 countries</h4>
      <img src={map} alt="map" className="img-fluid " />
</div>
    </div>
  )
}

export default GlobalReachMap
