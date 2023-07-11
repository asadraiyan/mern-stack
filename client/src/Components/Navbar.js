import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "../Components/Images/logo1.png";
import { UserContext, baseUrl } from "../App";
import { useNavigate } from "react-router-dom";

const Navbar = ({ notify }) => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  console.log("state =", state);

  const callLogoutPage = async () => {
    try {
      const res = await fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        dispatch({ type: "USER", payload: false });
        notify({
          text: "Logout successfully",
          position: "top-center",
          status: "success",
        });
        console.log("Logout successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={callLogoutPage}>
              Logout
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Signup" className="nav-link">
              Register
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-3">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
