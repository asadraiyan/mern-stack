import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate()

  const handleChange = (e)=>{
    const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
  }

  const handlePostData = async (e)=>{
    e.preventDefault()
    const{ name, email, phone, work, password, confirmPassword} = userData

    const res = await fetch("/register", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name, email, phone, work, password, confirmPassword
      })
    })

    const data = await res.json()
    if(res.status === 422 || !data){
      window.alert(data.error)
      console.log("Invalid Registration ")
    }
    else{
      window.alert(data.message)
      console.log("Registration successfull")
      navigate("/login")
    }
  }
  return (
    <>
      <section className="main-container">
        <div className="signup-box">
          <div className="signup-content">
            <h2 className="title">Sign Up</h2>
            <form method="POST" className="register-form">
              <div className="input-form">
                <label htmlFor="name" className="label">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} className="input-field" placeholder="Your Name" />
              </div>
              <div className="input-form">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} className="input-field" placeholder="Your Email" />
              </div>
              <div className="input-form">
                <label htmlFor="phone">
                  <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input type="number" name="phone" value={userData.phone} onChange={handleChange} className="input-field" placeholder="Your Phone" />
              </div>
              <div className="input-form">
                <label htmlFor="work">
                  <i className="zmdi zmdi-slideshow material-icons-name"></i>
                </label>
                <input type="text" name="work" value={userData.work} onChange={handleChange} className="input-field"  placeholder="Your Profession" />
              </div>
              <div className="input-form">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} className="input-field"  placeholder="Your Password" />
              </div>
              <div className="input-form">
                <label htmlFor="confirmPassword">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} className="input-field" placeholder="Confirm Your Password" />
              </div>
              <div className="button">
                <input type="submit" name="signup" onClick={handlePostData} className="submit-btn" value= "Regiser" />
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
