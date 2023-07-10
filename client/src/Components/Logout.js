import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate()

    const callLogoutPage = async () => {
        try {
          const res = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept : "application/json",
              "Content-Type": "application/json",
            },
             credentials: "include"

          });
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
          else{
          console.log("Logout successfully")
          navigate("/login")
          }

        } 
        
        catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        callLogoutPage();
      }, []);

  return (
    <>
      {/* <h1>Logout successfully</h1> */}
    </>
  )
}

export default Logout
