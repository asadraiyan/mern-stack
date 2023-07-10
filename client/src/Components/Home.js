import React, { useEffect, useState } from 'react'

const Home = () => {

  const [userName, setUserName] = useState("")
  const [show, setShow] = useState(false)

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
      setUserName(data.name);
      setShow(true)

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
    <div className='home-container'>
      <div className="home-box">
      <span className='welcome'>Welcome</span>
      <h1 className='username'>{userName}</h1>
      <h2 className='happy'>{show ? "Happy, to see you back!" : "We are the MERN developers"}</h2>
      </div>
    </div>
  )
}

export default Home
