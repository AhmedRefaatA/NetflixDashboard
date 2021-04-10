import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './Navbar.css'



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink  className="navbar-brand" to="#">
              <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26" width="130" height="60" alt="netflixlogo"/>
            </NavLink >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink  className="nav-link  active" to="#">Home <span className="sr-only">(current)</span></NavLink >
                <NavLink  className="nav-link " to="./app">Dashbord</NavLink >
                <NavLink  className="nav-link " to="#">Login</NavLink >
                <NavLink  className="nav-link " to="#">Signup</NavLink >
                <NavLink  className="nav-link " to="#">Account</NavLink >
                </div>
            </div>
        </nav>
    )
}

export default Navbar
