import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { authHeader } from "../constants/header";
import { baseUrl } from "../constants/apiConfig";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const { dispatch } = useContext(UserContext);

  const callHomePage = async () => {
    try {
      const res = await fetch(`${baseUrl}/getdata`, {
        method: "GET",
        headers: authHeader(),
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      dispatch({ type: "USER", payload: true });
      setShow(true);

      if (!res.status === 200) {
        dispatch({ type: "USER", payload: false });
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
    <div className="home-container">
      <div className="home-box">
        <span className="welcome">Welcome</span>
        <h1 className="username">{userName}</h1>
        <h2 className="happy">
          {show ? "Happy, to see you back!" : "The official website of MERN"}
        </h2>
      </div>
    </div>
  );
};

export default Home;
