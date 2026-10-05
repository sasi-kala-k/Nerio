import React from 'react'
import bk1 from '../../assets/images/Home/booking_1.png'
import bk2 from '../../assets/images/Home/booking_2.png'
import person from '../../assets/images/Home/person.png'
import './AppointmentBooking.css'

function AppointmentBooking() {
    return (
        <div className="container-fluid cus-bg-color my-5 py-4">

            <div className="d-flex flex-column align-items-center gap-2 mb-5 text-center">
                <h1 className="fw-bold">Book Your Subscription & Appointment</h1>
                <small className="fs-6 text-muted">Select your plan and secure your first session in one seamless step.</small>
            </div>

            <div className="container-fluid px-3" style={{maxWidth: "1300px"}}>
                <div className="row align-items-start g-5">

                    {/* Column 1: Plan  */}
                    <div className="col-12 col-lg-4">
                        <h5 className="fw-bold mb-3">1. Choose Your Plan</h5>

                        <div className="d-flex flex-column gap-3">

                            {/* Professional - */}
                            <div className="border border-2 rounded-4 border-primary p-4 position-relative bg-white">
                                <span className="badge rounded-pill bg-primary position-absolute top-0 end-0 mt-3 me-3 px-3 py-2">
                                    SELECTED
                                </span>
                                <h5 className="fw-bold mb-1">Professional</h5>
                                <div className="mb-2">
                                    <span className="text-primary fw-bold fs-3">$49.99</span>
                                    <span className="text-muted">/mo</span>
                                </div>
                                <div className="d-flex flex-column align-items-start gap-2">
                                    <small><img src={bk1} alt="check" height={15} className="me-2" />5 staff included</small>
                                    <small><img src={bk1} alt="check" height={15} className="me-2" />Resource scheduling</small>
                                    <small><img src={bk1} alt="check" height={15} className="me-2" />Gift certificates</small>
                                </div>
                            </div>

                            {/* Enterprise  */}
                            <div className="border rounded-4 p-4 bg-white">
                                <h5 className="fw-bold mb-1">Enterprise</h5>
                                <div className="mb-2">
                                    <span className="fw-bold fs-3">$79.99</span>
                                    <span className="text-muted">/mo</span>
                                </div>
                                <div className="d-flex flex-column align-items-start gap-2 text-muted">
                                    <small><img src={bk2} alt="check" height={15} className="me-2 opacity-50" />Multi-location support</small>
                                    <small><img src={bk2} alt="check" height={15} className="me-2 opacity-50" />Premium SLA support</small>
                                    <small><img src={bk2} alt="check" height={15} className="me-2 opacity-50" />Custom development</small>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Column 2: Booking preview */}
                    <div className="col-12 col-lg-8">
                        <h5 className="fw-bold mb-3">2. Real-Time Booking Preview</h5>

                        <div className="shadow-sm rounded-4 p-4 bg-white">

                            {/* Doctor info banner */}
                            <div className="rounded-4 bg-primary-subtle p-4 d-flex align-items-center">
                                <div className="circle-icon me-3">
                                    <img src={person} alt="person" height={20} />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-0">Dr. Sarah Johnson</h5>
                                    <small className="text-muted">Wellness Expert</small>
                                </div>
                            </div>

                            {/* Date + Slots */}
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <h6 className="text-muted small fw-semibold">SELECT DATE</h6>
                                    <div className="d-flex gap-3 gap-lg-4 flex-wrap mt-2">
                                        {[
                                            { day: 'M', date: 12 },
                                            { day: 'T', date: 13 },
                                            { day: 'W', date: 14, active: true },
                                            { day: 'T', date: 15 },
                                            { day: 'F', date: 16 },
                                            { day: 'S', date: 17 },
                                        ].map((d, i) => (
                                            <div key={i} className="d-flex flex-column align-items-center">
                                                <small className="text-muted mb-2">{d.day}</small>
                                                {d.active ? (
                                                    <span className="fw-semibold rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                                                        {d.date}
                                                    </span>
                                                ) : (
                                                    <span className="fw-semibold">{d.date}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mt-4 mt-md-0">
                                    <h6 className="text-muted small fw-semibold">AVAILABLE SLOTS</h6>
                                    <div className="d-flex flex-column gap-2 mt-2">
                                        <button className="btn rounded-3 border border-primary bg-primary-subtle text-primary fw-semibold py-2">
                                            9:00 AM
                                        </button>
                                        <button className="btn rounded-3 border py-2">11:30 AM</button>
                                        <button className="btn rounded-3 border py-2">02:00 PM</button>
                                    </div>
                                </div>
                            </div>

                            {/* Confirm button */}
                            <div className="row mt-4">
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3 fw-semibold rounded-3">
                                        Confirm Appointment & Subscribe &nbsp;→
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppointmentBooking