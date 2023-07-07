import React from "react";
import Signupimg from "../Components/Images/signup.png"
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="main-container">
        <div className="signup-box">
          <div className="signup-content">
            <h2 className="title">Sign Up</h2>
            <form className="register-form">
              <div className="input-form">
                <label htmlFor="name" className="label">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text" name="name" className="input-field" autoComplete="off" placeholder="Your Name" />
              </div>
              <div className="input-form">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" name="email" className="input-field" autoComplete="off" placeholder="Your Email" />
              </div>
              <div className="input-form">
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input type="number" name="phone" className="input-field" autoComplete="off" placeholder="Your Phone" />
              </div>
              <div className="input-form">
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow material-icons-name"></i>
                </label>
                <input type="text" name="work" className="input-field" autoComplete="off" placeholder="Your Profession" />
              </div>
              <div className="input-form">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="password" className="input-field" autoComplete="off" placeholder="Your Password" />
              </div>
              <div className="input-form">
                <label htmlFor="confirmpassword">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="confirmPassword" className="input-field" autoComplete="off" placeholder="Confirm Your Password" />
              </div>
              <div className="button">
                <input type="submit" name="signup" className="submit-btn" value= "Regiser" />
              </div>
            </form>
          </div>
          <div className="signup-img">
          <figure>
            <img src={Signupimg} alt="Signupimg"  className="signup-pic"/>
          </figure>
          <Link to="/Login" className="already">I am already register</Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
