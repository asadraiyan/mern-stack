import React, { useEffect, useState, useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Asadimg from "../Components/Images/asad.jpg";
import Userimg from "../Components/Images/user.png";
import { UserContext } from "../App";

const About = () => {

  const [userdata, setUserData] = useState({})

  const { state, dispatch } = useContext(UserContext);


  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data)
      dispatch({ type: "USER", payload: true });

      if (!res.status === 200) {
        const error = new Error(res.error);
        dispatch({ type: "USER", payload: false });
        throw error;
      }
    } catch (error) {
      console.log(error);
      // dispatch({ type: "USER", payload: false });
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="main-container">
        <form method="GET" className="about-container">
          <div className="img-container">
            <div className="profile-img">
              <img src={userdata.name === "Asad Raiyan" ? Asadimg : Userimg } alt="Asadimg" className="asad-img" />
            </div>
            <h2 className="title-name">Social Links</h2>
            <div className="social-container">
              <a
                href="https://github.com/asadraiyan"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <FaGithub />
                Github
              </a>
              <a
                href="https://twitter.com/raiyan_asad?t=vzNMJaOErNJDbeT5XjOR4A&s=09"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <FaTwitter />
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/asad-raiyan-486326188"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <FaLinkedin />
                Linkedin
              </a>
              <a
                href="https://m.facebook.com/asad.raiyan?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <FaFacebookSquare />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/asad.raiyan/?igshid=ZDdkNTZiNTM%3D"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <FaInstagramSquare />
                Instagram
              </a>
            </div>
          </div>
          <div className="name-container">
            <div className="about-info">
              <div className="personal-detail">
                <h3>{userdata.name}</h3>
                <span className="same-color">{userdata.work}</span>
                <span>Ranking: 1/10</span>
              </div>
              <div className="edit-container">
                <button className="edit-btn">Edit Profile</button>
              </div>
            </div>

            <div className="timeline">
              <h4 className="bold-heading">About</h4>
              <h4 className="bold-heading">Timeline</h4>
            </div>

            <div className="about-box">
              <div className="user-name">
                <p>User Id</p>
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Profession</p>
              </div>
              <div className="detail-numbers">
                <p className="same-color">{userdata._id}</p>
                <p className="same-color">{userdata.name}</p>
                <p className="same-color">{userdata.email}</p>
                <p className="same-color">{userdata.phone}</p>
                <p className="same-color">{userdata.work}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
