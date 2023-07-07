import React from 'react'
import Loginimg from "../Components/Images/login-img.jpg"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="signup-container">
        <div className="signup-box">
        <div className="signup-img">
          <figure>
            <img src={Loginimg} alt="Loginimg"  className="signup-pic"/>
          </figure>
          <Link to="/Signup" className="already">Create an account</Link>
            </div>
          <div className="login-content">
            <h2 className="title">Login</h2>
            <form className="login-form">
              <div className="input-form">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" name="email" className="input-field" autoComplete="off" placeholder="Your Email" />
              </div>
              <div className="input-form">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="password" className="input-field" autoComplete="off" placeholder="Your Password" />
              </div>
              <div className="button">
                <input type="submit" name="signup" className="submit-btn" value= "Login" />
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Login
