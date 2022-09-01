import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import logo from "../../../images/logo.png";

const Navbar = () => {
    return (
        <nav style={{backgroundColor: '#f3f5f9'}} className="navbar navbar-expand-lg customize-navbar sticky-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} width={50} className='img-fluid' alt="logo" />MERN E-Commerce
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </div>
            
        </nav>
    );
};

export default Navbar;