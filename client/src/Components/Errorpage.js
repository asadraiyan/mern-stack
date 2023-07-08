import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="noutfound-404">
            <h1 className="error-heading">404</h1>
          </div>
          <h2>Sorry, that page can't be found!</h2>
          <p className="mb-5" id="title-heading" >
            The page you are looking for might have been removed or it is temporarily unavailable
          </p> 
          <Link to="/" className="error-btn">Back to Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
