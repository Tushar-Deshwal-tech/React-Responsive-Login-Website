import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../public/arrow.svg";
import login from "../../public/login.svg";
import "./Landing.css";

function Landing() {
  const [currentIndicatorIndex, setCurrentIndicatorIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndicatorIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  
  return (
    <div>
      <div className={`main ${
        currentIndicatorIndex === 0 ? "Onboarding1" :
        currentIndicatorIndex === 1 ? "Onboarding2" :
        currentIndicatorIndex === 2 ? "Onboarding3" : "" }`}>
        <div className="content">
          <h4>We serve incomparable delicacies</h4>
        </div>
        <div className="text-content">
          All the best restaurants with their top menu waiting for you, they
          cant’t wait for your order!!
        </div>
        <div className="indicator-main">
          <div className={`indicator ${currentIndicatorIndex === 0 ? "active-indicator" : "" }`} ></div>
          <div className={`indicator ${currentIndicatorIndex === 1 ? "active-indicator" : "" }`} ></div>
          <div className={`indicator ${currentIndicatorIndex === 2 ? "active-indicator" : "" }`} ></div>
        </div>
        <div className={`onboarding-navigation ${currentIndicatorIndex === 2 ? "onboarding-navigation-hide" : "onboarding-navigation-show" }`}>
          <div className="skip">Skip</div>
          <div className="arrow" onClick={handleNext}>
            Next <img src={arrow} alt="" />
          </div>
        </div>
        <div className={`progress-button ${currentIndicatorIndex === 2 ? "progress-button-show" : "progress-button-hide" }`}>
          <Link to="/Login"><img src={login} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
