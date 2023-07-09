import React, { useEffect, useState } from "react";
import Phoneimg from "../Components/Images/phone.jpg";
import Emailimg from "../Components/Images/email.jpg";
import Addressimg from "../Components/Images/address1.png";
const Contact = () => {

  
  const [userdata, setUserData] = useState({})


  const callHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData(data)

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callHomePage();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="contact-box">
          <div className="info-box">
            <img src={Phoneimg} alt="phone" className="phone-img" />
            <div className="phone-info">
              <span className="phone-style">Phone</span>
              <span className="num-style">9876543210</span>
            </div>
          </div>
          <div className="info-box">
            <img src={Emailimg} alt="email" className="email-img" />
            <div className="phone-info">
              <span className="phone-style">Email</span>
              <span className="num-style">asadraiyan001@gmail.com</span>
            </div>
          </div>
          <div className="info-box">
            <img src={Addressimg} alt="address" className="address-img" />
            <div className="phone-info">
              <span className="phone-style">Address</span>
              <span className="num-style">Lucknow,UP,India</span>
            </div>
          </div>
        </div>

        <div className="contact-container">
          <div className="small-container">
            <h1>Get in Touch</h1>
            <form className="contact-field">
              <div className="input-text">
                <input
                  type="text"
                  className="input-section"
                  placeholder="Your Name"
                  autoComplete="off"
                  value={userdata.name}
                />
                <input
                  type="email"
                  className="input-section"
                  placeholder="Your Email"
                  autoComplete="off"
                  value={userdata.email}
                />
                <input
                  type="text"
                  className="input-section"
                  placeholder="Your Phone No."
                  autoComplete="off"
                  value={userdata.phone}
                />
              </div>
              <div className="button-section">
                <textarea
                  className="msg-txt"
                  rows="6"
                  placeholder="Type your message here"
                ></textarea>
                <button className="submit-contact-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
