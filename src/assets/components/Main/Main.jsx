import React from "react";
import "./Main.css";
import { assets } from "../../assets";

export const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Okeke AI</p>
        <img src={assets.avatar} alt="" />
      </div>

      <div className="mainContainer">
        <div className="greet">
          <p>
            <span>Heyyy,</span> 😌.
          </p>
          <p>What've you got for me today? </p>
        </div>

        <div className="cards">
          <div className="card">
            <p>
              Please tell me what's around me right now, any points of interest
              you can identify
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm creative ideas for a new project or challenge.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Give me 10 team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Write code that sorts a list of items efficiently.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="mainBottom">
          <div className="searchBox">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter a prompt here..."
            />
            <div className="below">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className="bottomInfo">
            Okeke may display inaccurate info, including about people, so
            double-check its responses. Your Privacy and Okeke Apps
          </p>
        </div>
      </div>
    </div>
  );
};
