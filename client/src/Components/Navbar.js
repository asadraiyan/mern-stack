import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
import logo from "../Components/Images/logo1.png"

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="#" className="navbar-brand"><img className='logo' src={logo} alt="logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" >Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link to="/About" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/Login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/Signup" className="nav-link">Registration</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
