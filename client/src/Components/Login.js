import React, { useState } from 'react'
import Loginimg from "../Components/Images/login-img.jpg"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e)=>{
    e.preventDefault()
    const res = await fetch("/signin", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email, password
      })
    })

    const data = await res.json()
    console.log("data =", data)
    if(data.error || res.status === 400) {
      window.alert(data.error)
      console.log("Invalid credentials")
    }
    else{
      window.alert(data.message)
      console.log("Login successfull")
      navigate("/")
    }
  }
  return (
    <>
      <section className="main-container">
        <div className="signup-box">
        <div className="signup-img">
          <figure>
            <img src={Loginimg} alt="Loginimg"  className="signup-pic"/>
          </figure>
          <Link to="/Signup" className="already">Create an account</Link>
            </div>
          <div className="login-content">
            <h2 className="title">Login</h2>
            <form method='POST' className="login-form">
              <div className="input-form">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="input-field" autoComplete="off" placeholder="Your Email" />
              </div>
              <div className="input-form">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input-field" autoComplete="off" placeholder="Your Password" />
              </div>
              <div className="button">
                <input type="submit" name="signup" onClick={handleLogin} className="login-btn" value= "Login" />
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Login
