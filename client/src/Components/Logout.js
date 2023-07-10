import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = ({notify}) => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const callLogoutPage = async () => {
    try {
      const res = await fetch("/logout", {
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
            status: "success"
        })
        console.log("Logout successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callLogoutPage();
  }, []);

  return <>{/* <h1>Logout successfully</h1> */}</>;
};

export default Logout;
