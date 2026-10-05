import React from 'react'
import './Reviews.css' 
import arrow from '../../assets/images/Home/icon-arrow.png'
import group from '../../assets/images/Home/icon-group.png'
function Reviews() {

  return (
    <div className="container-fluid reviews-background text-center py-4 d-flex flex-column  justify-content-center align-items-center">
      <small className="text-center">MULTIPLE PLATFORMS. 100'S OF REVIEWS. ONE VERTICT</small>
      <div className="d-flex flex-column flex-lg-row gap-lg-5 align-items-center justify-content-center mt-2">
      <div className="d-flex flex-column">
        <span className="fw-semibold text-white fs-6"><img src={arrow} alt="arrow" width="18" className="me-2" />Capterra</span>
        <small>⭐⭐⭐⭐⭐<small className="ms-2 my-auto fw-semibold text-white fs-6">4.7/5</small></small>
      </div>

      <div className="d-flex flex-column">
        <span className="fw-semibold text-white fs-6"><img src={group} alt="arrow" width="22" className="me-2" />CROWD</span>
        <div>⭐⭐⭐⭐⭐<small className="ms-2 fw-semibold text-white">4.7/5</small></div>
      </div>

      <div className="d-flex flex-column">
        <span className="fw-semibold text-white fs-6">Google</span>
        <div>⭐⭐⭐⭐⭐<small className="ms-2 fw-semibold text-white">5/5</small></div>
      </div>
      </div>
    </div>
  )
}

export default Reviews
