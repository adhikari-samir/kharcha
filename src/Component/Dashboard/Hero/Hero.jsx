import React from "react";
import "./Hero.css";
import kharchalogo from "../../Image/kharchaimage.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigate = useNavigate();
  const Changepage = () => {
    let path = "/login";
    navigate(path);
  };
  return (
    <>
      <div className="backgrround">
        <h1>
          <span>k</span>harcha
        </h1>
        <div className="header_logo">
          <button>Sign-up</button>
        </div>
      </div>
      <div className="fp-container">
        <div className="fp-items">
          <h1 className="title">Expense management </h1>
          <p>
            Kharcha, a fundamental aspect of financial management, encompasses
            all expenditures and financial outflows, playing a pivotal role in
            budgeting and fiscal responsibility.
          </p>
          <button className="battan" onClick={Changepage}>
            Get Started
          </button>
        </div>
        <img className="kharcha_img" src={kharchalogo} />
      </div>
    </>
  );
};
export default Hero;
