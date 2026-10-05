import React, { useRef, useState } from 'react'
import './Header.css'
import Nerio_Logo from '../../assets/images/Home/Nerio_Logo.png'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
function Header() {
     const navigate = useNavigate()
   const toggleBtnRef = useRef(null)

    const closeMenu = () => {
        const menuEl = document.getElementById('mobileNavLinks')
        if (menuEl && menuEl.classList.contains('show') && toggleBtnRef.current) {
            toggleBtnRef.current.click()
        }
    }
    return (


        <div className="header-background sticky-top">

            <div className="row d-none d-lg-flex align-items-center mx-5  py-2" >
                <div className="col-10  mb-0 ">
                    <small className="text-white ms-3"> If you have any questions or want to know more about our product,schedule a freecall with us now!</small>
                </div>
                <div className="col-2 mb-0 ">
                    <button className="btn btn-sm bg-white rounded-0 py-1 text-black fw-semibold">Schedule a Consultation</button>
                </div>
            </div>
            <hr className="mt-1 mb-0 ms-0  d-md-block px-0" ></hr>

            <div className="row mx-0 mx-lg-5 align-items-center  ">
                <div className="col-6 col-lg-2 d-sm-flex  align-items-center justify-content-between  ">
                    <a className="navbar-brand m-0" href="/">
                        <img src={Nerio_Logo} alt="Nerio Logo" height="95" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 d-lg-none d-flex justify-content-end gap-1">
                     <button className="btn cus-btn rounded-1 px-1 py-0 fw-semibold text-center" >SignUp</button>
                    <button
                    ref={toggleBtnRef}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mobileNavLinks"
                        aria-controls="mobileNavLinks"
                        
                        aria-expanded="false"
                        aria-label="Toggle navigation" >
                        <GiHamburgerMenu className="text-white" size={28} />
                    </button>
                   
                </div>


                <div className="col-lg-8 d-none d-lg-flex align-items-center justify-content-center flex-wrap ">
                    <NavLink className={({isActive})=>`navbar-link px-3 py-1 fw-semibold text-decoration-none rounded-pill  ${isActive ? 'navbar-link-bgColor ':'' }`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `navbar-link fw-semibold ${isActive ? 'navbar-link-bgColor px-3 py-2 rounded-pill' : ''}`} to="/customers">Customers</NavLink>
                    <NavLink className={({isActive}) => `navbar-link fw-semibold ${isActive?'navbar-link-bgColor px-2 py-2 rounded-pill':''}`}
                   to="/enterprise">Enterprise</NavLink>
                    <NavLink className={({isActive}) => `navbar-link fw-semibold ${isActive?'navbar-link-bgColor px-3 py-2 rounded-pill':''}`} to="/pricing">Pricing</NavLink>
                    <NavLink className={({isActive}) => `navbar-link fw-semibold ${isActive?'navbar-link-bgColor px-3 py-2 rounded-pill':''}`} to="/contactUs">Contact Us</NavLink>


                </div>
                <div className="col-lg-2 d-none d-lg-flex align-items-center justify-content-around gap-5">
                    <button className="btn cus-btn rounded-1 px-3 fw-semibold text-center" onClick={()=>navigate('/signup')}  >SignUp</button>
                    <button className="btn cus-btn rounded-1 px-3 fw-semibold text-center  fw-semibold" onClick={()=>navigate('/login')}>Login</button>
                </div>

                <div className="col-12 collapse d-lg-none" id="mobileNavLinks">
                    <div className="d-flex flex-column gap-2 py-3">
                        <Link className="navbar-link fw-semibold text-decoration-none" to="/">Home</Link>
                        <Link className="navbar-link fw-semibold" to="/customers" onClick={closeMenu}>Customers</Link>
                        <Link className="navbar-link fw-semibold" to="/enterprise" onClick={closeMenu}>Enterprise</Link>
                        <Link className="navbar-link fw-semibold" to="/pricing" onClick={closeMenu}>Pricing</Link>
                        <Link className="navbar-link fw-semibold" to="/contactUs" onClick={closeMenu}>Contact Us</Link>
                    <hr/>
                        <Link className="navbar-link rounded-1 px-2 fw-semibold" to="/" onClick={closeMenu}>Login</Link>
                        <button className="btn btn-sm w-50  bg-white rounded-0 py-1 text-black fw-semibold" onClick={closeMenu}>Consultation</button>

                    </div>
                </div>


            </div>

        </div>
    )

}

export default Header
