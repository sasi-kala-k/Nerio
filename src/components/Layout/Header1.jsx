import React from 'react'
import './Header.css'
import Nerio_Logo from '../../assets/images/Nerio_Logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-background">
            <div>
                <div className=" d-flex align-items-center justify-content-between mx-5 text-white border-bottom border-1 border-black-subtle">
                    <p className="text-white"> If you have any questions or want to know more about our product,schedule a freecall with us know!</p>
                    <button className=" btn btn-sm bg-white fw-semibold rounded-0 m-2">schedule a consultaion</button>
                </div>
                <div className="vr" ></div>
                {/* <div className="d-flex justify-content-between">
                    <img src={Nerio_Logo} alt="nerio_logo" height="90" />
                    <div className="d-flex" >
                        <Link className="my-link fw-semibold text-white" to="/">Home</Link>
                        <Link className="my-link fw-semibold text-white" to="/services">Customers</Link>
                        <Link className="my-link fw-semibold text-white" to="/about">Enterprise</Link>
                        <Link className="my-link fw-semibold text-white" to="/contact">Pricing</Link>
                        <Link className="my-link fw-semibold text-white" to="/contact">Contact Us</Link>

                    </div>

                    <div className="d-flex">
                        <button className="btn bg-success">Signup</button>
                        <button className="btn bg-success">Login</button>

                    </div>
                </div> */}

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid d-flex align-items-center justify-content-between mx-5">
                        <a className="navbar-brand flex-grow-1" href="/">
                            <img src={Nerio_Logo} alt="Nerio Logo" height="60" />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-none d-lg-flex gap-2 fw-semibold text-white"> 

                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Enterprise</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Contact Us</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="d-flex gap-3 text-light">
                            <Link className="nav-link bg-success rounded-1 px-2" to="/about">SignUp</Link>
                            <Link className="nav-link" to="/about">Login</Link>
                        </div>
                    </div>
                    </nav>
            </div>
            </div>
            )
}

            export default Header
