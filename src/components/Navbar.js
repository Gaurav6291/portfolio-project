import React from "react";
import "../App.css";
import logo from "../portfolio_logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        <NavLink className="navbar-brand" to="/"><img className="loga" src={logo} alt="logo" /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
      
        <div className="collapse navbar-collapse pickRight" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to ="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to ="/about">About Me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to ="/projects">Projects</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to ="/contact">Contact</NavLink>
            </li>

          
          </ul>
        
        </div>
        </div>
      </nav>
    )
}

export default Navbar
