import React from "react";
import Phoneimg from "../Components/Images/phone.jpg";
import Emailimg from "../Components/Images/email.jpg";
import Addressimg from "../Components/Images/address1.png";
const Contact = () => {
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
      </div>
    </>
  );
};

export default Contact;
