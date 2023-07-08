import React, { useState } from "react";
import Signupimg from "../Components/Images/signup.png"
import { Link } from "react-router-dom";

const Signup = () => {

  const [userData,setUserData] = useState({
    name : "",
    email: "",
    work : "",
    phone: "",
    password: "",
    confirmPassword : ""
  })

  const handleChange = (e)=>{
    const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
  }
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
                <input type="text" name="name" value={userData.name} onChange={handleChange} className="input-field" autoComplete="off" placeholder="Your Name" />
              </div>
              <div className="input-form">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} className="input-field" autoComplete="off" placeholder="Your Email" />
              </div>
              <div className="input-form">
                <label htmlFor="phone">
                  <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input type="number" name="phone" value={userData.phone} onChange={handleChange} className="input-field" autoComplete="off" placeholder="Your Phone" />
              </div>
              <div className="input-form">
                <label htmlFor="work">
                  <i class="zmdi zmdi-slideshow material-icons-name"></i>
                </label>
                <input type="text" name="work" value={userData.work} onChange={handleChange} className="input-field" autoComplete="off" placeholder="Your Profession" />
              </div>
              <div className="input-form">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} className="input-field" autoComplete="off" placeholder="Your Password" />
              </div>
              <div className="input-form">
                <label htmlFor="confirmPassword">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} className="input-field" autoComplete="off" placeholder="Confirm Your Password" />
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
