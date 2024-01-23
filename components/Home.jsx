import React from "react";
import {useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

    const navigateToLogin= () => {
        navigate('/login');
    };
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <center>
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white p-3" data-aos="slide-right">
              D Resume Builder
            </h2>
            <div className="h-50">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <div className="h-50">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h2 className="text-white mt-4" data-aos="slide-left">
              Create Now
            </h2>
          </div>
          </center>
        </div>
        <div className="seprator-text">
          <span>Create Your Own Resume</span>
          <button onClick={navigateToLogin}>Create</button>
        </div>
      </div>
    </>
  );
};

export default Home;